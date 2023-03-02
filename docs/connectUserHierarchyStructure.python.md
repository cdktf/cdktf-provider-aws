# `connectUserHierarchyStructure` Submodule <a name="`connectUserHierarchyStructure` Submodule" id="@cdktf/provider-aws.connectUserHierarchyStructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectUserHierarchyStructure <a name="ConnectUserHierarchyStructure" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure aws_connect_user_hierarchy_structure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructure(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hierarchy_structure: ConnectUserHierarchyStructureHierarchyStructure,
  instance_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.hierarchyStructure">hierarchy_structure</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure">ConnectUserHierarchyStructureHierarchyStructure</a></code> | hierarchy_structure block. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#instance_id ConnectUserHierarchyStructure#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#id ConnectUserHierarchyStructure#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hierarchy_structure`<sup>Required</sup> <a name="hierarchy_structure" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.hierarchyStructure"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure">ConnectUserHierarchyStructureHierarchyStructure</a>

hierarchy_structure block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#hierarchy_structure ConnectUserHierarchyStructure#hierarchy_structure}

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#instance_id ConnectUserHierarchyStructure#instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#id ConnectUserHierarchyStructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.putHierarchyStructure">put_hierarchy_structure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_hierarchy_structure` <a name="put_hierarchy_structure" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.putHierarchyStructure"></a>

```python
def put_hierarchy_structure(
  level_five: ConnectUserHierarchyStructureHierarchyStructureLevelFive = None,
  level_four: ConnectUserHierarchyStructureHierarchyStructureLevelFour = None,
  level_one: ConnectUserHierarchyStructureHierarchyStructureLevelOne = None,
  level_three: ConnectUserHierarchyStructureHierarchyStructureLevelThree = None,
  level_two: ConnectUserHierarchyStructureHierarchyStructureLevelTwo = None
) -> None
```

###### `level_five`<sup>Optional</sup> <a name="level_five" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.putHierarchyStructure.parameter.levelFive"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive">ConnectUserHierarchyStructureHierarchyStructureLevelFive</a>

level_five block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#level_five ConnectUserHierarchyStructure#level_five}

---

###### `level_four`<sup>Optional</sup> <a name="level_four" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.putHierarchyStructure.parameter.levelFour"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour">ConnectUserHierarchyStructureHierarchyStructureLevelFour</a>

level_four block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#level_four ConnectUserHierarchyStructure#level_four}

---

###### `level_one`<sup>Optional</sup> <a name="level_one" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.putHierarchyStructure.parameter.levelOne"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne">ConnectUserHierarchyStructureHierarchyStructureLevelOne</a>

level_one block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#level_one ConnectUserHierarchyStructure#level_one}

---

###### `level_three`<sup>Optional</sup> <a name="level_three" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.putHierarchyStructure.parameter.levelThree"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree">ConnectUserHierarchyStructureHierarchyStructureLevelThree</a>

level_three block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#level_three ConnectUserHierarchyStructure#level_three}

---

###### `level_two`<sup>Optional</sup> <a name="level_two" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.putHierarchyStructure.parameter.levelTwo"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo">ConnectUserHierarchyStructureHierarchyStructureLevelTwo</a>

level_two block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#level_two ConnectUserHierarchyStructure#level_two}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructure.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructure.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructure.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.hierarchyStructure">hierarchy_structure</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference">ConnectUserHierarchyStructureHierarchyStructureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.hierarchyStructureInput">hierarchy_structure_input</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure">ConnectUserHierarchyStructureHierarchyStructure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hierarchy_structure`<sup>Required</sup> <a name="hierarchy_structure" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.hierarchyStructure"></a>

```python
hierarchy_structure: ConnectUserHierarchyStructureHierarchyStructureOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference">ConnectUserHierarchyStructureHierarchyStructureOutputReference</a>

---

##### `hierarchy_structure_input`<sup>Optional</sup> <a name="hierarchy_structure_input" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.hierarchyStructureInput"></a>

```python
hierarchy_structure_input: ConnectUserHierarchyStructureHierarchyStructure
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure">ConnectUserHierarchyStructureHierarchyStructure</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectUserHierarchyStructureConfig <a name="ConnectUserHierarchyStructureConfig" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hierarchy_structure: ConnectUserHierarchyStructureHierarchyStructure,
  instance_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.hierarchyStructure">hierarchy_structure</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure">ConnectUserHierarchyStructureHierarchyStructure</a></code> | hierarchy_structure block. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#instance_id ConnectUserHierarchyStructure#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#id ConnectUserHierarchyStructure#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hierarchy_structure`<sup>Required</sup> <a name="hierarchy_structure" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.hierarchyStructure"></a>

```python
hierarchy_structure: ConnectUserHierarchyStructureHierarchyStructure
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure">ConnectUserHierarchyStructureHierarchyStructure</a>

hierarchy_structure block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#hierarchy_structure ConnectUserHierarchyStructure#hierarchy_structure}

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#instance_id ConnectUserHierarchyStructure#instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#id ConnectUserHierarchyStructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ConnectUserHierarchyStructureHierarchyStructure <a name="ConnectUserHierarchyStructureHierarchyStructure" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure(
  level_five: ConnectUserHierarchyStructureHierarchyStructureLevelFive = None,
  level_four: ConnectUserHierarchyStructureHierarchyStructureLevelFour = None,
  level_one: ConnectUserHierarchyStructureHierarchyStructureLevelOne = None,
  level_three: ConnectUserHierarchyStructureHierarchyStructureLevelThree = None,
  level_two: ConnectUserHierarchyStructureHierarchyStructureLevelTwo = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.property.levelFive">level_five</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive">ConnectUserHierarchyStructureHierarchyStructureLevelFive</a></code> | level_five block. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.property.levelFour">level_four</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour">ConnectUserHierarchyStructureHierarchyStructureLevelFour</a></code> | level_four block. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.property.levelOne">level_one</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne">ConnectUserHierarchyStructureHierarchyStructureLevelOne</a></code> | level_one block. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.property.levelThree">level_three</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree">ConnectUserHierarchyStructureHierarchyStructureLevelThree</a></code> | level_three block. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.property.levelTwo">level_two</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo">ConnectUserHierarchyStructureHierarchyStructureLevelTwo</a></code> | level_two block. |

---

##### `level_five`<sup>Optional</sup> <a name="level_five" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.property.levelFive"></a>

```python
level_five: ConnectUserHierarchyStructureHierarchyStructureLevelFive
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive">ConnectUserHierarchyStructureHierarchyStructureLevelFive</a>

level_five block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#level_five ConnectUserHierarchyStructure#level_five}

---

##### `level_four`<sup>Optional</sup> <a name="level_four" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.property.levelFour"></a>

```python
level_four: ConnectUserHierarchyStructureHierarchyStructureLevelFour
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour">ConnectUserHierarchyStructureHierarchyStructureLevelFour</a>

level_four block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#level_four ConnectUserHierarchyStructure#level_four}

---

##### `level_one`<sup>Optional</sup> <a name="level_one" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.property.levelOne"></a>

```python
level_one: ConnectUserHierarchyStructureHierarchyStructureLevelOne
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne">ConnectUserHierarchyStructureHierarchyStructureLevelOne</a>

level_one block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#level_one ConnectUserHierarchyStructure#level_one}

---

##### `level_three`<sup>Optional</sup> <a name="level_three" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.property.levelThree"></a>

```python
level_three: ConnectUserHierarchyStructureHierarchyStructureLevelThree
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree">ConnectUserHierarchyStructureHierarchyStructureLevelThree</a>

level_three block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#level_three ConnectUserHierarchyStructure#level_three}

---

##### `level_two`<sup>Optional</sup> <a name="level_two" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure.property.levelTwo"></a>

```python
level_two: ConnectUserHierarchyStructureHierarchyStructureLevelTwo
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo">ConnectUserHierarchyStructureHierarchyStructureLevelTwo</a>

level_two block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#level_two ConnectUserHierarchyStructure#level_two}

---

### ConnectUserHierarchyStructureHierarchyStructureLevelFive <a name="ConnectUserHierarchyStructureHierarchyStructureLevelFive" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}.

---

### ConnectUserHierarchyStructureHierarchyStructureLevelFour <a name="ConnectUserHierarchyStructureHierarchyStructureLevelFour" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}.

---

### ConnectUserHierarchyStructureHierarchyStructureLevelOne <a name="ConnectUserHierarchyStructureHierarchyStructureLevelOne" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}.

---

### ConnectUserHierarchyStructureHierarchyStructureLevelThree <a name="ConnectUserHierarchyStructureHierarchyStructureLevelThree" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}.

---

### ConnectUserHierarchyStructureHierarchyStructureLevelTwo <a name="ConnectUserHierarchyStructureHierarchyStructureLevelTwo" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference <a name="ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive">ConnectUserHierarchyStructureHierarchyStructureLevelFive</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.internalValue"></a>

```python
internal_value: ConnectUserHierarchyStructureHierarchyStructureLevelFive
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive">ConnectUserHierarchyStructureHierarchyStructureLevelFive</a>

---


### ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference <a name="ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour">ConnectUserHierarchyStructureHierarchyStructureLevelFour</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.internalValue"></a>

```python
internal_value: ConnectUserHierarchyStructureHierarchyStructureLevelFour
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour">ConnectUserHierarchyStructureHierarchyStructureLevelFour</a>

---


### ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference <a name="ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne">ConnectUserHierarchyStructureHierarchyStructureLevelOne</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.internalValue"></a>

```python
internal_value: ConnectUserHierarchyStructureHierarchyStructureLevelOne
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne">ConnectUserHierarchyStructureHierarchyStructureLevelOne</a>

---


### ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference <a name="ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree">ConnectUserHierarchyStructureHierarchyStructureLevelThree</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.internalValue"></a>

```python
internal_value: ConnectUserHierarchyStructureHierarchyStructureLevelThree
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree">ConnectUserHierarchyStructureHierarchyStructureLevelThree</a>

---


### ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference <a name="ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo">ConnectUserHierarchyStructureHierarchyStructureLevelTwo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.internalValue"></a>

```python
internal_value: ConnectUserHierarchyStructureHierarchyStructureLevelTwo
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo">ConnectUserHierarchyStructureHierarchyStructureLevelTwo</a>

---


### ConnectUserHierarchyStructureHierarchyStructureOutputReference <a name="ConnectUserHierarchyStructureHierarchyStructureOutputReference" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelFive">put_level_five</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelFour">put_level_four</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelOne">put_level_one</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelThree">put_level_three</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelTwo">put_level_two</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resetLevelFive">reset_level_five</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resetLevelFour">reset_level_four</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resetLevelOne">reset_level_one</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resetLevelThree">reset_level_three</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resetLevelTwo">reset_level_two</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_level_five` <a name="put_level_five" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelFive"></a>

```python
def put_level_five(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelFive.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}.

---

##### `put_level_four` <a name="put_level_four" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelFour"></a>

```python
def put_level_four(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelFour.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}.

---

##### `put_level_one` <a name="put_level_one" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelOne"></a>

```python
def put_level_one(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelOne.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}.

---

##### `put_level_three` <a name="put_level_three" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelThree"></a>

```python
def put_level_three(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelThree.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}.

---

##### `put_level_two` <a name="put_level_two" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelTwo"></a>

```python
def put_level_two(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.putLevelTwo.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}.

---

##### `reset_level_five` <a name="reset_level_five" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resetLevelFive"></a>

```python
def reset_level_five() -> None
```

##### `reset_level_four` <a name="reset_level_four" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resetLevelFour"></a>

```python
def reset_level_four() -> None
```

##### `reset_level_one` <a name="reset_level_one" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resetLevelOne"></a>

```python
def reset_level_one() -> None
```

##### `reset_level_three` <a name="reset_level_three" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resetLevelThree"></a>

```python
def reset_level_three() -> None
```

##### `reset_level_two` <a name="reset_level_two" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.resetLevelTwo"></a>

```python
def reset_level_two() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelFive">level_five</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference">ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelFour">level_four</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference">ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelOne">level_one</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference">ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelThree">level_three</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference">ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelTwo">level_two</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference">ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelFiveInput">level_five_input</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive">ConnectUserHierarchyStructureHierarchyStructureLevelFive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelFourInput">level_four_input</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour">ConnectUserHierarchyStructureHierarchyStructureLevelFour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelOneInput">level_one_input</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne">ConnectUserHierarchyStructureHierarchyStructureLevelOne</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelThreeInput">level_three_input</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree">ConnectUserHierarchyStructureHierarchyStructureLevelThree</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelTwoInput">level_two_input</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo">ConnectUserHierarchyStructureHierarchyStructureLevelTwo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure">ConnectUserHierarchyStructureHierarchyStructure</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `level_five`<sup>Required</sup> <a name="level_five" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelFive"></a>

```python
level_five: ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference">ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference</a>

---

##### `level_four`<sup>Required</sup> <a name="level_four" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelFour"></a>

```python
level_four: ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference">ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference</a>

---

##### `level_one`<sup>Required</sup> <a name="level_one" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelOne"></a>

```python
level_one: ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference">ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference</a>

---

##### `level_three`<sup>Required</sup> <a name="level_three" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelThree"></a>

```python
level_three: ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference">ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference</a>

---

##### `level_two`<sup>Required</sup> <a name="level_two" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelTwo"></a>

```python
level_two: ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference">ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference</a>

---

##### `level_five_input`<sup>Optional</sup> <a name="level_five_input" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelFiveInput"></a>

```python
level_five_input: ConnectUserHierarchyStructureHierarchyStructureLevelFive
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFive">ConnectUserHierarchyStructureHierarchyStructureLevelFive</a>

---

##### `level_four_input`<sup>Optional</sup> <a name="level_four_input" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelFourInput"></a>

```python
level_four_input: ConnectUserHierarchyStructureHierarchyStructureLevelFour
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelFour">ConnectUserHierarchyStructureHierarchyStructureLevelFour</a>

---

##### `level_one_input`<sup>Optional</sup> <a name="level_one_input" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelOneInput"></a>

```python
level_one_input: ConnectUserHierarchyStructureHierarchyStructureLevelOne
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelOne">ConnectUserHierarchyStructureHierarchyStructureLevelOne</a>

---

##### `level_three_input`<sup>Optional</sup> <a name="level_three_input" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelThreeInput"></a>

```python
level_three_input: ConnectUserHierarchyStructureHierarchyStructureLevelThree
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelThree">ConnectUserHierarchyStructureHierarchyStructureLevelThree</a>

---

##### `level_two_input`<sup>Optional</sup> <a name="level_two_input" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelTwoInput"></a>

```python
level_two_input: ConnectUserHierarchyStructureHierarchyStructureLevelTwo
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureLevelTwo">ConnectUserHierarchyStructureHierarchyStructureLevelTwo</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructureOutputReference.property.internalValue"></a>

```python
internal_value: ConnectUserHierarchyStructureHierarchyStructure
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyStructure.ConnectUserHierarchyStructureHierarchyStructure">ConnectUserHierarchyStructureHierarchyStructure</a>

---



