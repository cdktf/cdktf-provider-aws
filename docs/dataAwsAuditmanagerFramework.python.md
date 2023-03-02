# `dataAwsAuditmanagerFramework` Submodule <a name="`dataAwsAuditmanagerFramework` Submodule" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAuditmanagerFramework <a name="DataAwsAuditmanagerFramework" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework aws_auditmanager_framework}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_auditmanager_framework

dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  framework_type: str,
  name: str,
  control_sets: typing.Union[IResolvable, typing.List[DataAwsAuditmanagerFrameworkControlSets]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.frameworkType">framework_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#framework_type DataAwsAuditmanagerFramework#framework_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#name DataAwsAuditmanagerFramework#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.controlSets">control_sets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets">DataAwsAuditmanagerFrameworkControlSets</a>]]</code> | control_sets block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `framework_type`<sup>Required</sup> <a name="framework_type" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.frameworkType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#framework_type DataAwsAuditmanagerFramework#framework_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#name DataAwsAuditmanagerFramework#name}.

---

##### `control_sets`<sup>Optional</sup> <a name="control_sets" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.controlSets"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets">DataAwsAuditmanagerFrameworkControlSets</a>]]

control_sets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#control_sets DataAwsAuditmanagerFramework#control_sets}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.putControlSets">put_control_sets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.resetControlSets">reset_control_sets</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_control_sets` <a name="put_control_sets" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.putControlSets"></a>

```python
def put_control_sets(
  value: typing.Union[IResolvable, typing.List[DataAwsAuditmanagerFrameworkControlSets]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.putControlSets.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets">DataAwsAuditmanagerFrameworkControlSets</a>]]

---

##### `reset_control_sets` <a name="reset_control_sets" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.resetControlSets"></a>

```python
def reset_control_sets() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_auditmanager_framework

dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_auditmanager_framework

dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_auditmanager_framework

dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.complianceType">compliance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.controlSets">control_sets</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList">DataAwsAuditmanagerFrameworkControlSetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.controlSetsInput">control_sets_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets">DataAwsAuditmanagerFrameworkControlSets</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.frameworkTypeInput">framework_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.frameworkType">framework_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `compliance_type`<sup>Required</sup> <a name="compliance_type" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.complianceType"></a>

```python
compliance_type: str
```

- *Type:* str

---

##### `control_sets`<sup>Required</sup> <a name="control_sets" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.controlSets"></a>

```python
control_sets: DataAwsAuditmanagerFrameworkControlSetsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList">DataAwsAuditmanagerFrameworkControlSetsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `control_sets_input`<sup>Optional</sup> <a name="control_sets_input" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.controlSetsInput"></a>

```python
control_sets_input: typing.Union[IResolvable, typing.List[DataAwsAuditmanagerFrameworkControlSets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets">DataAwsAuditmanagerFrameworkControlSets</a>]]

---

##### `framework_type_input`<sup>Optional</sup> <a name="framework_type_input" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.frameworkTypeInput"></a>

```python
framework_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `framework_type`<sup>Required</sup> <a name="framework_type" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.frameworkType"></a>

```python
framework_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAuditmanagerFrameworkConfig <a name="DataAwsAuditmanagerFrameworkConfig" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_auditmanager_framework

dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  framework_type: str,
  name: str,
  control_sets: typing.Union[IResolvable, typing.List[DataAwsAuditmanagerFrameworkControlSets]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.frameworkType">framework_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#framework_type DataAwsAuditmanagerFramework#framework_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#name DataAwsAuditmanagerFramework#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.controlSets">control_sets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets">DataAwsAuditmanagerFrameworkControlSets</a>]]</code> | control_sets block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `framework_type`<sup>Required</sup> <a name="framework_type" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.frameworkType"></a>

```python
framework_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#framework_type DataAwsAuditmanagerFramework#framework_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#name DataAwsAuditmanagerFramework#name}.

---

##### `control_sets`<sup>Optional</sup> <a name="control_sets" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.controlSets"></a>

```python
control_sets: typing.Union[IResolvable, typing.List[DataAwsAuditmanagerFrameworkControlSets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets">DataAwsAuditmanagerFrameworkControlSets</a>]]

control_sets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#control_sets DataAwsAuditmanagerFramework#control_sets}

---

### DataAwsAuditmanagerFrameworkControlSets <a name="DataAwsAuditmanagerFrameworkControlSets" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_auditmanager_framework

dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets(
  controls: typing.Union[IResolvable, typing.List[DataAwsAuditmanagerFrameworkControlSetsControls]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets.property.controls">controls</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls">DataAwsAuditmanagerFrameworkControlSetsControls</a>]]</code> | controls block. |

---

##### `controls`<sup>Optional</sup> <a name="controls" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets.property.controls"></a>

```python
controls: typing.Union[IResolvable, typing.List[DataAwsAuditmanagerFrameworkControlSetsControls]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls">DataAwsAuditmanagerFrameworkControlSetsControls</a>]]

controls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#controls DataAwsAuditmanagerFramework#controls}

---

### DataAwsAuditmanagerFrameworkControlSetsControls <a name="DataAwsAuditmanagerFrameworkControlSetsControls" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_auditmanager_framework

dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsAuditmanagerFrameworkControlSetsControlsList <a name="DataAwsAuditmanagerFrameworkControlSetsControlsList" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_auditmanager_framework

dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls">DataAwsAuditmanagerFrameworkControlSetsControls</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsAuditmanagerFrameworkControlSetsControls]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls">DataAwsAuditmanagerFrameworkControlSetsControls</a>]]

---


### DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference <a name="DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_auditmanager_framework

dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls">DataAwsAuditmanagerFrameworkControlSetsControls</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsAuditmanagerFrameworkControlSetsControls, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls">DataAwsAuditmanagerFrameworkControlSetsControls</a>, cdktf.IResolvable]

---


### DataAwsAuditmanagerFrameworkControlSetsList <a name="DataAwsAuditmanagerFrameworkControlSetsList" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_auditmanager_framework

dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAuditmanagerFrameworkControlSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets">DataAwsAuditmanagerFrameworkControlSets</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsAuditmanagerFrameworkControlSets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets">DataAwsAuditmanagerFrameworkControlSets</a>]]

---


### DataAwsAuditmanagerFrameworkControlSetsOutputReference <a name="DataAwsAuditmanagerFrameworkControlSetsOutputReference" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_auditmanager_framework

dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.putControls">put_controls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.resetControls">reset_controls</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_controls` <a name="put_controls" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.putControls"></a>

```python
def put_controls(
  value: typing.Union[IResolvable, typing.List[DataAwsAuditmanagerFrameworkControlSetsControls]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.putControls.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls">DataAwsAuditmanagerFrameworkControlSetsControls</a>]]

---

##### `reset_controls` <a name="reset_controls" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.resetControls"></a>

```python
def reset_controls() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.controls">controls</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList">DataAwsAuditmanagerFrameworkControlSetsControlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.controlsInput">controls_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls">DataAwsAuditmanagerFrameworkControlSetsControls</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets">DataAwsAuditmanagerFrameworkControlSets</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `controls`<sup>Required</sup> <a name="controls" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.controls"></a>

```python
controls: DataAwsAuditmanagerFrameworkControlSetsControlsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList">DataAwsAuditmanagerFrameworkControlSetsControlsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `controls_input`<sup>Optional</sup> <a name="controls_input" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.controlsInput"></a>

```python
controls_input: typing.Union[IResolvable, typing.List[DataAwsAuditmanagerFrameworkControlSetsControls]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls">DataAwsAuditmanagerFrameworkControlSetsControls</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsAuditmanagerFrameworkControlSets, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets">DataAwsAuditmanagerFrameworkControlSets</a>, cdktf.IResolvable]

---



