# `dataAwsConnectUserHierarchyGroup` Submodule <a name="`dataAwsConnectUserHierarchyGroup` Submodule" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsConnectUserHierarchyGroup <a name="DataAwsConnectUserHierarchyGroup" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group aws_connect_user_hierarchy_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_group

dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_id: str,
  hierarchy_group_id: str = None,
  id: str = None,
  name: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#instance_id DataAwsConnectUserHierarchyGroup#instance_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.hierarchyGroupId">hierarchy_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#hierarchy_group_id DataAwsConnectUserHierarchyGroup#hierarchy_group_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#id DataAwsConnectUserHierarchyGroup#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#name DataAwsConnectUserHierarchyGroup#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#tags DataAwsConnectUserHierarchyGroup#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#instance_id DataAwsConnectUserHierarchyGroup#instance_id}.

---

##### `hierarchy_group_id`<sup>Optional</sup> <a name="hierarchy_group_id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.hierarchyGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#hierarchy_group_id DataAwsConnectUserHierarchyGroup#hierarchy_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#id DataAwsConnectUserHierarchyGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#name DataAwsConnectUserHierarchyGroup#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#tags DataAwsConnectUserHierarchyGroup#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.resetHierarchyGroupId">reset_hierarchy_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_hierarchy_group_id` <a name="reset_hierarchy_group_id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.resetHierarchyGroupId"></a>

```python
def reset_hierarchy_group_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_group

dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_group

dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_group

dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.hierarchyPath">hierarchy_path</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList">DataAwsConnectUserHierarchyGroupHierarchyPathList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.levelId">level_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.hierarchyGroupIdInput">hierarchy_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.hierarchyGroupId">hierarchy_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `hierarchy_path`<sup>Required</sup> <a name="hierarchy_path" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.hierarchyPath"></a>

```python
hierarchy_path: DataAwsConnectUserHierarchyGroupHierarchyPathList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList">DataAwsConnectUserHierarchyGroupHierarchyPathList</a>

---

##### `level_id`<sup>Required</sup> <a name="level_id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.levelId"></a>

```python
level_id: str
```

- *Type:* str

---

##### `hierarchy_group_id_input`<sup>Optional</sup> <a name="hierarchy_group_id_input" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.hierarchyGroupIdInput"></a>

```python
hierarchy_group_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hierarchy_group_id`<sup>Required</sup> <a name="hierarchy_group_id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.hierarchyGroupId"></a>

```python
hierarchy_group_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsConnectUserHierarchyGroupConfig <a name="DataAwsConnectUserHierarchyGroupConfig" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_group

dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_id: str,
  hierarchy_group_id: str = None,
  id: str = None,
  name: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#instance_id DataAwsConnectUserHierarchyGroup#instance_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.hierarchyGroupId">hierarchy_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#hierarchy_group_id DataAwsConnectUserHierarchyGroup#hierarchy_group_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#id DataAwsConnectUserHierarchyGroup#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#name DataAwsConnectUserHierarchyGroup#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#tags DataAwsConnectUserHierarchyGroup#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#instance_id DataAwsConnectUserHierarchyGroup#instance_id}.

---

##### `hierarchy_group_id`<sup>Optional</sup> <a name="hierarchy_group_id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.hierarchyGroupId"></a>

```python
hierarchy_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#hierarchy_group_id DataAwsConnectUserHierarchyGroup#hierarchy_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#id DataAwsConnectUserHierarchyGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#name DataAwsConnectUserHierarchyGroup#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#tags DataAwsConnectUserHierarchyGroup#tags}.

---

### DataAwsConnectUserHierarchyGroupHierarchyPath <a name="DataAwsConnectUserHierarchyGroupHierarchyPath" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPath.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_group

dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPath()
```


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_group

dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive()
```


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_group

dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour()
```


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_group

dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne()
```


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_group

dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree()
```


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_group

dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_group

dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_group

dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive">DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive">DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive</a>

---


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_group

dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_group

dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour">DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour">DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour</a>

---


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_group

dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_group

dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne">DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne">DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne</a>

---


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_group

dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_group

dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree">DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree">DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree</a>

---


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_group

dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_group

dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo">DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo">DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo</a>

---


### DataAwsConnectUserHierarchyGroupHierarchyPathList <a name="DataAwsConnectUserHierarchyGroupHierarchyPathList" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_group

dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference <a name="DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_group

dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelFive">level_five</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList">DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelFour">level_four</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList">DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelOne">level_one</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList">DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelThree">level_three</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList">DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelTwo">level_two</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList">DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPath">DataAwsConnectUserHierarchyGroupHierarchyPath</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `level_five`<sup>Required</sup> <a name="level_five" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelFive"></a>

```python
level_five: DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList">DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList</a>

---

##### `level_four`<sup>Required</sup> <a name="level_four" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelFour"></a>

```python
level_four: DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList">DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList</a>

---

##### `level_one`<sup>Required</sup> <a name="level_one" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelOne"></a>

```python
level_one: DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList">DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList</a>

---

##### `level_three`<sup>Required</sup> <a name="level_three" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelThree"></a>

```python
level_three: DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList">DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList</a>

---

##### `level_two`<sup>Required</sup> <a name="level_two" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelTwo"></a>

```python
level_two: DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList">DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsConnectUserHierarchyGroupHierarchyPath
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPath">DataAwsConnectUserHierarchyGroupHierarchyPath</a>

---



