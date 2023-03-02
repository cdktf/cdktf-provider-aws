# `dataAwsConnectUserHierarchyStructure` Submodule <a name="`dataAwsConnectUserHierarchyStructure` Submodule" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsConnectUserHierarchyStructure <a name="DataAwsConnectUserHierarchyStructure" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_structure aws_connect_user_hierarchy_structure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_structure

dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure(
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
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_structure#instance_id DataAwsConnectUserHierarchyStructure#instance_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_structure#id DataAwsConnectUserHierarchyStructure#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.Initializer.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_structure#instance_id DataAwsConnectUserHierarchyStructure#instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_structure#id DataAwsConnectUserHierarchyStructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_structure

dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_structure

dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_structure

dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.hierarchyStructure">hierarchy_structure</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList">DataAwsConnectUserHierarchyStructureHierarchyStructureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `hierarchy_structure`<sup>Required</sup> <a name="hierarchy_structure" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.hierarchyStructure"></a>

```python
hierarchy_structure: DataAwsConnectUserHierarchyStructureHierarchyStructureList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList">DataAwsConnectUserHierarchyStructureHierarchyStructureList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructure.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsConnectUserHierarchyStructureConfig <a name="DataAwsConnectUserHierarchyStructureConfig" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_structure

dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_structure#instance_id DataAwsConnectUserHierarchyStructure#instance_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_structure#id DataAwsConnectUserHierarchyStructure#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_structure#instance_id DataAwsConnectUserHierarchyStructure#instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_structure#id DataAwsConnectUserHierarchyStructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsConnectUserHierarchyStructureHierarchyStructure <a name="DataAwsConnectUserHierarchyStructureHierarchyStructure" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructure.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_structure

dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructure()
```


### DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFive <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFive" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFive.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_structure

dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFive()
```


### DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFour <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFour" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFour"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFour.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_structure

dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFour()
```


### DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOne <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOne" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOne"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOne.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_structure

dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOne()
```


### DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThree <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThree" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThree"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThree.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_structure

dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThree()
```


### DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwo <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwo" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwo.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_structure

dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwo()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_structure

dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_structure

dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFive">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFive</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFive
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFive">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFive</a>

---


### DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_structure

dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_structure

dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFour">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFour</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFour
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFour">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFour</a>

---


### DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_structure

dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_structure

dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOne">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOne</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOne
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOne">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOne</a>

---


### DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_structure

dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_structure

dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThree">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThree</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThree
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThree">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThree</a>

---


### DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_structure

dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_structure

dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwo">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwo
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwo">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwo</a>

---


### DataAwsConnectUserHierarchyStructureHierarchyStructureList <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureList" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_structure

dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference <a name="DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_user_hierarchy_structure

dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelFive">level_five</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelFour">level_four</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelOne">level_one</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelThree">level_three</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelTwo">level_two</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructure">DataAwsConnectUserHierarchyStructureHierarchyStructure</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `level_five`<sup>Required</sup> <a name="level_five" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelFive"></a>

```python
level_five: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList</a>

---

##### `level_four`<sup>Required</sup> <a name="level_four" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelFour"></a>

```python
level_four: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList</a>

---

##### `level_one`<sup>Required</sup> <a name="level_one" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelOne"></a>

```python
level_one: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList</a>

---

##### `level_three`<sup>Required</sup> <a name="level_three" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelThree"></a>

```python
level_three: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList</a>

---

##### `level_two`<sup>Required</sup> <a name="level_two" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.property.levelTwo"></a>

```python
level_two: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList">DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsConnectUserHierarchyStructureHierarchyStructure
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyStructure.DataAwsConnectUserHierarchyStructureHierarchyStructure">DataAwsConnectUserHierarchyStructureHierarchyStructure</a>

---



