# `auditmanagerControl` Submodule <a name="`auditmanagerControl` Submodule" id="@cdktf/provider-aws.auditmanagerControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditmanagerControl <a name="AuditmanagerControl" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control aws_auditmanager_control}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_control

auditmanagerControl.AuditmanagerControl(
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
  action_plan_instructions: str = None,
  action_plan_title: str = None,
  control_mapping_sources: typing.Union[IResolvable, typing.List[AuditmanagerControlControlMappingSources]] = None,
  description: str = None,
  tags: typing.Mapping[str] = None,
  testing_information: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#name AuditmanagerControl#name}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.actionPlanInstructions">action_plan_instructions</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#action_plan_instructions AuditmanagerControl#action_plan_instructions}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.actionPlanTitle">action_plan_title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#action_plan_title AuditmanagerControl#action_plan_title}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.controlMappingSources">control_mapping_sources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>]]</code> | control_mapping_sources block. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#description AuditmanagerControl#description}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#tags AuditmanagerControl#tags}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.testingInformation">testing_information</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#testing_information AuditmanagerControl#testing_information}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#name AuditmanagerControl#name}.

---

##### `action_plan_instructions`<sup>Optional</sup> <a name="action_plan_instructions" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.actionPlanInstructions"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#action_plan_instructions AuditmanagerControl#action_plan_instructions}.

---

##### `action_plan_title`<sup>Optional</sup> <a name="action_plan_title" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.actionPlanTitle"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#action_plan_title AuditmanagerControl#action_plan_title}.

---

##### `control_mapping_sources`<sup>Optional</sup> <a name="control_mapping_sources" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.controlMappingSources"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>]]

control_mapping_sources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#control_mapping_sources AuditmanagerControl#control_mapping_sources}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#description AuditmanagerControl#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#tags AuditmanagerControl#tags}.

---

##### `testing_information`<sup>Optional</sup> <a name="testing_information" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.testingInformation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#testing_information AuditmanagerControl#testing_information}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.putControlMappingSources">put_control_mapping_sources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetActionPlanInstructions">reset_action_plan_instructions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetActionPlanTitle">reset_action_plan_title</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetControlMappingSources">reset_control_mapping_sources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetTestingInformation">reset_testing_information</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_control_mapping_sources` <a name="put_control_mapping_sources" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.putControlMappingSources"></a>

```python
def put_control_mapping_sources(
  value: typing.Union[IResolvable, typing.List[AuditmanagerControlControlMappingSources]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.putControlMappingSources.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>]]

---

##### `reset_action_plan_instructions` <a name="reset_action_plan_instructions" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetActionPlanInstructions"></a>

```python
def reset_action_plan_instructions() -> None
```

##### `reset_action_plan_title` <a name="reset_action_plan_title" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetActionPlanTitle"></a>

```python
def reset_action_plan_title() -> None
```

##### `reset_control_mapping_sources` <a name="reset_control_mapping_sources" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetControlMappingSources"></a>

```python
def reset_control_mapping_sources() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_testing_information` <a name="reset_testing_information" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetTestingInformation"></a>

```python
def reset_testing_information() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_control

auditmanagerControl.AuditmanagerControl.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_control

auditmanagerControl.AuditmanagerControl.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_control

auditmanagerControl.AuditmanagerControl.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.controlMappingSources">control_mapping_sources</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList">AuditmanagerControlControlMappingSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.actionPlanInstructionsInput">action_plan_instructions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.actionPlanTitleInput">action_plan_title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.controlMappingSourcesInput">control_mapping_sources_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.testingInformationInput">testing_information_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.actionPlanInstructions">action_plan_instructions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.actionPlanTitle">action_plan_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.testingInformation">testing_information</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `control_mapping_sources`<sup>Required</sup> <a name="control_mapping_sources" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.controlMappingSources"></a>

```python
control_mapping_sources: AuditmanagerControlControlMappingSourcesList
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList">AuditmanagerControlControlMappingSourcesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `action_plan_instructions_input`<sup>Optional</sup> <a name="action_plan_instructions_input" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.actionPlanInstructionsInput"></a>

```python
action_plan_instructions_input: str
```

- *Type:* str

---

##### `action_plan_title_input`<sup>Optional</sup> <a name="action_plan_title_input" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.actionPlanTitleInput"></a>

```python
action_plan_title_input: str
```

- *Type:* str

---

##### `control_mapping_sources_input`<sup>Optional</sup> <a name="control_mapping_sources_input" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.controlMappingSourcesInput"></a>

```python
control_mapping_sources_input: typing.Union[IResolvable, typing.List[AuditmanagerControlControlMappingSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `testing_information_input`<sup>Optional</sup> <a name="testing_information_input" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.testingInformationInput"></a>

```python
testing_information_input: str
```

- *Type:* str

---

##### `action_plan_instructions`<sup>Required</sup> <a name="action_plan_instructions" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.actionPlanInstructions"></a>

```python
action_plan_instructions: str
```

- *Type:* str

---

##### `action_plan_title`<sup>Required</sup> <a name="action_plan_title" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.actionPlanTitle"></a>

```python
action_plan_title: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `testing_information`<sup>Required</sup> <a name="testing_information" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.testingInformation"></a>

```python
testing_information: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerControlConfig <a name="AuditmanagerControlConfig" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_control

auditmanagerControl.AuditmanagerControlConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  action_plan_instructions: str = None,
  action_plan_title: str = None,
  control_mapping_sources: typing.Union[IResolvable, typing.List[AuditmanagerControlControlMappingSources]] = None,
  description: str = None,
  tags: typing.Mapping[str] = None,
  testing_information: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#name AuditmanagerControl#name}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.actionPlanInstructions">action_plan_instructions</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#action_plan_instructions AuditmanagerControl#action_plan_instructions}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.actionPlanTitle">action_plan_title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#action_plan_title AuditmanagerControl#action_plan_title}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.controlMappingSources">control_mapping_sources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>]]</code> | control_mapping_sources block. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#description AuditmanagerControl#description}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#tags AuditmanagerControl#tags}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.testingInformation">testing_information</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#testing_information AuditmanagerControl#testing_information}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#name AuditmanagerControl#name}.

---

##### `action_plan_instructions`<sup>Optional</sup> <a name="action_plan_instructions" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.actionPlanInstructions"></a>

```python
action_plan_instructions: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#action_plan_instructions AuditmanagerControl#action_plan_instructions}.

---

##### `action_plan_title`<sup>Optional</sup> <a name="action_plan_title" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.actionPlanTitle"></a>

```python
action_plan_title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#action_plan_title AuditmanagerControl#action_plan_title}.

---

##### `control_mapping_sources`<sup>Optional</sup> <a name="control_mapping_sources" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.controlMappingSources"></a>

```python
control_mapping_sources: typing.Union[IResolvable, typing.List[AuditmanagerControlControlMappingSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>]]

control_mapping_sources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#control_mapping_sources AuditmanagerControl#control_mapping_sources}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#description AuditmanagerControl#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#tags AuditmanagerControl#tags}.

---

##### `testing_information`<sup>Optional</sup> <a name="testing_information" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.testingInformation"></a>

```python
testing_information: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#testing_information AuditmanagerControl#testing_information}.

---

### AuditmanagerControlControlMappingSources <a name="AuditmanagerControlControlMappingSources" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_control

auditmanagerControl.AuditmanagerControlControlMappingSources(
  source_name: str,
  source_set_up_option: str,
  source_type: str,
  source_description: str = None,
  source_frequency: str = None,
  source_keyword: typing.Union[IResolvable, typing.List[AuditmanagerControlControlMappingSourcesSourceKeyword]] = None,
  troubleshooting_text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceName">source_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_name AuditmanagerControl#source_name}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceSetUpOption">source_set_up_option</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_set_up_option AuditmanagerControl#source_set_up_option}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceType">source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_type AuditmanagerControl#source_type}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceDescription">source_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_description AuditmanagerControl#source_description}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceFrequency">source_frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_frequency AuditmanagerControl#source_frequency}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceKeyword">source_keyword</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a>]]</code> | source_keyword block. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.troubleshootingText">troubleshooting_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#troubleshooting_text AuditmanagerControl#troubleshooting_text}. |

---

##### `source_name`<sup>Required</sup> <a name="source_name" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceName"></a>

```python
source_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_name AuditmanagerControl#source_name}.

---

##### `source_set_up_option`<sup>Required</sup> <a name="source_set_up_option" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceSetUpOption"></a>

```python
source_set_up_option: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_set_up_option AuditmanagerControl#source_set_up_option}.

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_type AuditmanagerControl#source_type}.

---

##### `source_description`<sup>Optional</sup> <a name="source_description" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceDescription"></a>

```python
source_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_description AuditmanagerControl#source_description}.

---

##### `source_frequency`<sup>Optional</sup> <a name="source_frequency" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceFrequency"></a>

```python
source_frequency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_frequency AuditmanagerControl#source_frequency}.

---

##### `source_keyword`<sup>Optional</sup> <a name="source_keyword" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceKeyword"></a>

```python
source_keyword: typing.Union[IResolvable, typing.List[AuditmanagerControlControlMappingSourcesSourceKeyword]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a>]]

source_keyword block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_keyword AuditmanagerControl#source_keyword}

---

##### `troubleshooting_text`<sup>Optional</sup> <a name="troubleshooting_text" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.troubleshootingText"></a>

```python
troubleshooting_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#troubleshooting_text AuditmanagerControl#troubleshooting_text}.

---

### AuditmanagerControlControlMappingSourcesSourceKeyword <a name="AuditmanagerControlControlMappingSourcesSourceKeyword" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_control

auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword(
  keyword_input_type: str,
  keyword_value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword.property.keywordInputType">keyword_input_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#keyword_input_type AuditmanagerControl#keyword_input_type}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword.property.keywordValue">keyword_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#keyword_value AuditmanagerControl#keyword_value}. |

---

##### `keyword_input_type`<sup>Required</sup> <a name="keyword_input_type" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword.property.keywordInputType"></a>

```python
keyword_input_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#keyword_input_type AuditmanagerControl#keyword_input_type}.

---

##### `keyword_value`<sup>Required</sup> <a name="keyword_value" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword.property.keywordValue"></a>

```python
keyword_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#keyword_value AuditmanagerControl#keyword_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AuditmanagerControlControlMappingSourcesList <a name="AuditmanagerControlControlMappingSourcesList" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_control

auditmanagerControl.AuditmanagerControlControlMappingSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AuditmanagerControlControlMappingSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AuditmanagerControlControlMappingSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>]]

---


### AuditmanagerControlControlMappingSourcesOutputReference <a name="AuditmanagerControlControlMappingSourcesOutputReference" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_control

auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.putSourceKeyword">put_source_keyword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resetSourceDescription">reset_source_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resetSourceFrequency">reset_source_frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resetSourceKeyword">reset_source_keyword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resetTroubleshootingText">reset_troubleshooting_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_source_keyword` <a name="put_source_keyword" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.putSourceKeyword"></a>

```python
def put_source_keyword(
  value: typing.Union[IResolvable, typing.List[AuditmanagerControlControlMappingSourcesSourceKeyword]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.putSourceKeyword.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a>]]

---

##### `reset_source_description` <a name="reset_source_description" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resetSourceDescription"></a>

```python
def reset_source_description() -> None
```

##### `reset_source_frequency` <a name="reset_source_frequency" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resetSourceFrequency"></a>

```python
def reset_source_frequency() -> None
```

##### `reset_source_keyword` <a name="reset_source_keyword" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resetSourceKeyword"></a>

```python
def reset_source_keyword() -> None
```

##### `reset_troubleshooting_text` <a name="reset_troubleshooting_text" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resetTroubleshootingText"></a>

```python
def reset_troubleshooting_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceId">source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceKeyword">source_keyword</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList">AuditmanagerControlControlMappingSourcesSourceKeywordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceDescriptionInput">source_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceFrequencyInput">source_frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceKeywordInput">source_keyword_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceNameInput">source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceSetUpOptionInput">source_set_up_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceTypeInput">source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.troubleshootingTextInput">troubleshooting_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceDescription">source_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceFrequency">source_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceName">source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceSetUpOption">source_set_up_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.troubleshootingText">troubleshooting_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceId"></a>

```python
source_id: str
```

- *Type:* str

---

##### `source_keyword`<sup>Required</sup> <a name="source_keyword" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceKeyword"></a>

```python
source_keyword: AuditmanagerControlControlMappingSourcesSourceKeywordList
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList">AuditmanagerControlControlMappingSourcesSourceKeywordList</a>

---

##### `source_description_input`<sup>Optional</sup> <a name="source_description_input" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceDescriptionInput"></a>

```python
source_description_input: str
```

- *Type:* str

---

##### `source_frequency_input`<sup>Optional</sup> <a name="source_frequency_input" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceFrequencyInput"></a>

```python
source_frequency_input: str
```

- *Type:* str

---

##### `source_keyword_input`<sup>Optional</sup> <a name="source_keyword_input" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceKeywordInput"></a>

```python
source_keyword_input: typing.Union[IResolvable, typing.List[AuditmanagerControlControlMappingSourcesSourceKeyword]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a>]]

---

##### `source_name_input`<sup>Optional</sup> <a name="source_name_input" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceNameInput"></a>

```python
source_name_input: str
```

- *Type:* str

---

##### `source_set_up_option_input`<sup>Optional</sup> <a name="source_set_up_option_input" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceSetUpOptionInput"></a>

```python
source_set_up_option_input: str
```

- *Type:* str

---

##### `source_type_input`<sup>Optional</sup> <a name="source_type_input" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceTypeInput"></a>

```python
source_type_input: str
```

- *Type:* str

---

##### `troubleshooting_text_input`<sup>Optional</sup> <a name="troubleshooting_text_input" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.troubleshootingTextInput"></a>

```python
troubleshooting_text_input: str
```

- *Type:* str

---

##### `source_description`<sup>Required</sup> <a name="source_description" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceDescription"></a>

```python
source_description: str
```

- *Type:* str

---

##### `source_frequency`<sup>Required</sup> <a name="source_frequency" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceFrequency"></a>

```python
source_frequency: str
```

- *Type:* str

---

##### `source_name`<sup>Required</sup> <a name="source_name" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceName"></a>

```python
source_name: str
```

- *Type:* str

---

##### `source_set_up_option`<sup>Required</sup> <a name="source_set_up_option" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceSetUpOption"></a>

```python
source_set_up_option: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `troubleshooting_text`<sup>Required</sup> <a name="troubleshooting_text" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.troubleshootingText"></a>

```python
troubleshooting_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AuditmanagerControlControlMappingSources, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>, cdktf.IResolvable]

---


### AuditmanagerControlControlMappingSourcesSourceKeywordList <a name="AuditmanagerControlControlMappingSourcesSourceKeywordList" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_control

auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AuditmanagerControlControlMappingSourcesSourceKeyword]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a>]]

---


### AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference <a name="AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_control

auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordInputTypeInput">keyword_input_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordValueInput">keyword_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordInputType">keyword_input_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordValue">keyword_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `keyword_input_type_input`<sup>Optional</sup> <a name="keyword_input_type_input" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordInputTypeInput"></a>

```python
keyword_input_type_input: str
```

- *Type:* str

---

##### `keyword_value_input`<sup>Optional</sup> <a name="keyword_value_input" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordValueInput"></a>

```python
keyword_value_input: str
```

- *Type:* str

---

##### `keyword_input_type`<sup>Required</sup> <a name="keyword_input_type" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordInputType"></a>

```python
keyword_input_type: str
```

- *Type:* str

---

##### `keyword_value`<sup>Required</sup> <a name="keyword_value" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordValue"></a>

```python
keyword_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AuditmanagerControlControlMappingSourcesSourceKeyword, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a>, cdktf.IResolvable]

---



