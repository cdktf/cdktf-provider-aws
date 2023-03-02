# `dataAwsAuditmanagerControl` Submodule <a name="`dataAwsAuditmanagerControl` Submodule" id="@cdktf/provider-aws.dataAwsAuditmanagerControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAuditmanagerControl <a name="DataAwsAuditmanagerControl" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control aws_auditmanager_control}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_auditmanager_control

dataAwsAuditmanagerControl.DataAwsAuditmanagerControl(
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
  type: str,
  control_mapping_sources: typing.Union[IResolvable, typing.List[DataAwsAuditmanagerControlControlMappingSources]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control#name DataAwsAuditmanagerControl#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control#type DataAwsAuditmanagerControl#type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.controlMappingSources">control_mapping_sources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources">DataAwsAuditmanagerControlControlMappingSources</a>]]</code> | control_mapping_sources block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control#name DataAwsAuditmanagerControl#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control#type DataAwsAuditmanagerControl#type}.

---

##### `control_mapping_sources`<sup>Optional</sup> <a name="control_mapping_sources" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.controlMappingSources"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources">DataAwsAuditmanagerControlControlMappingSources</a>]]

control_mapping_sources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control#control_mapping_sources DataAwsAuditmanagerControl#control_mapping_sources}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.putControlMappingSources">put_control_mapping_sources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.resetControlMappingSources">reset_control_mapping_sources</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_control_mapping_sources` <a name="put_control_mapping_sources" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.putControlMappingSources"></a>

```python
def put_control_mapping_sources(
  value: typing.Union[IResolvable, typing.List[DataAwsAuditmanagerControlControlMappingSources]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.putControlMappingSources.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources">DataAwsAuditmanagerControlControlMappingSources</a>]]

---

##### `reset_control_mapping_sources` <a name="reset_control_mapping_sources" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.resetControlMappingSources"></a>

```python
def reset_control_mapping_sources() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_auditmanager_control

dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_auditmanager_control

dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_auditmanager_control

dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.actionPlanInstructions">action_plan_instructions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.actionPlanTitle">action_plan_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.controlMappingSources">control_mapping_sources</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList">DataAwsAuditmanagerControlControlMappingSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.testingInformation">testing_information</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.controlMappingSourcesInput">control_mapping_sources_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources">DataAwsAuditmanagerControlControlMappingSources</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `action_plan_instructions`<sup>Required</sup> <a name="action_plan_instructions" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.actionPlanInstructions"></a>

```python
action_plan_instructions: str
```

- *Type:* str

---

##### `action_plan_title`<sup>Required</sup> <a name="action_plan_title" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.actionPlanTitle"></a>

```python
action_plan_title: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `control_mapping_sources`<sup>Required</sup> <a name="control_mapping_sources" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.controlMappingSources"></a>

```python
control_mapping_sources: DataAwsAuditmanagerControlControlMappingSourcesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList">DataAwsAuditmanagerControlControlMappingSourcesList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `testing_information`<sup>Required</sup> <a name="testing_information" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.testingInformation"></a>

```python
testing_information: str
```

- *Type:* str

---

##### `control_mapping_sources_input`<sup>Optional</sup> <a name="control_mapping_sources_input" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.controlMappingSourcesInput"></a>

```python
control_mapping_sources_input: typing.Union[IResolvable, typing.List[DataAwsAuditmanagerControlControlMappingSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources">DataAwsAuditmanagerControlControlMappingSources</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAuditmanagerControlConfig <a name="DataAwsAuditmanagerControlConfig" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_auditmanager_control

dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  type: str,
  control_mapping_sources: typing.Union[IResolvable, typing.List[DataAwsAuditmanagerControlControlMappingSources]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control#name DataAwsAuditmanagerControl#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control#type DataAwsAuditmanagerControl#type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.controlMappingSources">control_mapping_sources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources">DataAwsAuditmanagerControlControlMappingSources</a>]]</code> | control_mapping_sources block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control#name DataAwsAuditmanagerControl#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control#type DataAwsAuditmanagerControl#type}.

---

##### `control_mapping_sources`<sup>Optional</sup> <a name="control_mapping_sources" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.controlMappingSources"></a>

```python
control_mapping_sources: typing.Union[IResolvable, typing.List[DataAwsAuditmanagerControlControlMappingSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources">DataAwsAuditmanagerControlControlMappingSources</a>]]

control_mapping_sources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control#control_mapping_sources DataAwsAuditmanagerControl#control_mapping_sources}

---

### DataAwsAuditmanagerControlControlMappingSources <a name="DataAwsAuditmanagerControlControlMappingSources" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_auditmanager_control

dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources(
  source_keyword: typing.Union[IResolvable, typing.List[DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources.property.sourceKeyword">source_keyword</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword">DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword</a>]]</code> | source_keyword block. |

---

##### `source_keyword`<sup>Optional</sup> <a name="source_keyword" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources.property.sourceKeyword"></a>

```python
source_keyword: typing.Union[IResolvable, typing.List[DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword">DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword</a>]]

source_keyword block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control#source_keyword DataAwsAuditmanagerControl#source_keyword}

---

### DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword <a name="DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_auditmanager_control

dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsAuditmanagerControlControlMappingSourcesList <a name="DataAwsAuditmanagerControlControlMappingSourcesList" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_auditmanager_control

dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAuditmanagerControlControlMappingSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources">DataAwsAuditmanagerControlControlMappingSources</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsAuditmanagerControlControlMappingSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources">DataAwsAuditmanagerControlControlMappingSources</a>]]

---


### DataAwsAuditmanagerControlControlMappingSourcesOutputReference <a name="DataAwsAuditmanagerControlControlMappingSourcesOutputReference" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_auditmanager_control

dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.putSourceKeyword">put_source_keyword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.resetSourceKeyword">reset_source_keyword</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_source_keyword` <a name="put_source_keyword" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.putSourceKeyword"></a>

```python
def put_source_keyword(
  value: typing.Union[IResolvable, typing.List[DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.putSourceKeyword.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword">DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword</a>]]

---

##### `reset_source_keyword` <a name="reset_source_keyword" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.resetSourceKeyword"></a>

```python
def reset_source_keyword() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceDescription">source_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceFrequency">source_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceId">source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceKeyword">source_keyword</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList">DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceName">source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceSetUpOption">source_set_up_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.troubleshootingText">troubleshooting_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceKeywordInput">source_keyword_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword">DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources">DataAwsAuditmanagerControlControlMappingSources</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_description`<sup>Required</sup> <a name="source_description" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceDescription"></a>

```python
source_description: str
```

- *Type:* str

---

##### `source_frequency`<sup>Required</sup> <a name="source_frequency" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceFrequency"></a>

```python
source_frequency: str
```

- *Type:* str

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceId"></a>

```python
source_id: str
```

- *Type:* str

---

##### `source_keyword`<sup>Required</sup> <a name="source_keyword" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceKeyword"></a>

```python
source_keyword: DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList">DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList</a>

---

##### `source_name`<sup>Required</sup> <a name="source_name" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceName"></a>

```python
source_name: str
```

- *Type:* str

---

##### `source_set_up_option`<sup>Required</sup> <a name="source_set_up_option" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceSetUpOption"></a>

```python
source_set_up_option: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `troubleshooting_text`<sup>Required</sup> <a name="troubleshooting_text" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.troubleshootingText"></a>

```python
troubleshooting_text: str
```

- *Type:* str

---

##### `source_keyword_input`<sup>Optional</sup> <a name="source_keyword_input" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceKeywordInput"></a>

```python
source_keyword_input: typing.Union[IResolvable, typing.List[DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword">DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsAuditmanagerControlControlMappingSources, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources">DataAwsAuditmanagerControlControlMappingSources</a>, cdktf.IResolvable]

---


### DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList <a name="DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_auditmanager_control

dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword">DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword">DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword</a>]]

---


### DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference <a name="DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_auditmanager_control

dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordInputType">keyword_input_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordValue">keyword_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword">DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `keyword_input_type`<sup>Required</sup> <a name="keyword_input_type" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordInputType"></a>

```python
keyword_input_type: str
```

- *Type:* str

---

##### `keyword_value`<sup>Required</sup> <a name="keyword_value" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordValue"></a>

```python
keyword_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword">DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword</a>, cdktf.IResolvable]

---



