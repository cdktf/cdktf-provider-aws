# `fisExperimentTemplate` Submodule <a name="`fisExperimentTemplate` Submodule" id="@cdktf/provider-aws.fisExperimentTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FisExperimentTemplate <a name="FisExperimentTemplate" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template aws_fis_experiment_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: typing.Union[IResolvable, typing.List[FisExperimentTemplateAction]],
  description: str,
  role_arn: str,
  stop_condition: typing.Union[IResolvable, typing.List[FisExperimentTemplateStopCondition]],
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  target: typing.Union[IResolvable, typing.List[FisExperimentTemplateTarget]] = None,
  timeouts: FisExperimentTemplateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.action">action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction">FisExperimentTemplateAction</a>]]</code> | action block. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#description FisExperimentTemplate#description}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#role_arn FisExperimentTemplate#role_arn}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.stopCondition">stop_condition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition">FisExperimentTemplateStopCondition</a>]]</code> | stop_condition block. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#id FisExperimentTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#tags FisExperimentTemplate#tags}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#tags_all FisExperimentTemplate#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.target">target</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget">FisExperimentTemplateTarget</a>]]</code> | target block. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts">FisExperimentTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.action"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction">FisExperimentTemplateAction</a>]]

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#action FisExperimentTemplate#action}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#description FisExperimentTemplate#description}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#role_arn FisExperimentTemplate#role_arn}.

---

##### `stop_condition`<sup>Required</sup> <a name="stop_condition" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.stopCondition"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition">FisExperimentTemplateStopCondition</a>]]

stop_condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#stop_condition FisExperimentTemplate#stop_condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#id FisExperimentTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#tags FisExperimentTemplate#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#tags_all FisExperimentTemplate#tags_all}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.target"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget">FisExperimentTemplateTarget</a>]]

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#target FisExperimentTemplate#target}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts">FisExperimentTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#timeouts FisExperimentTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putStopCondition">put_stop_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putTarget">put_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetTarget">reset_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_action` <a name="put_action" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putAction"></a>

```python
def put_action(
  value: typing.Union[IResolvable, typing.List[FisExperimentTemplateAction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putAction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction">FisExperimentTemplateAction</a>]]

---

##### `put_stop_condition` <a name="put_stop_condition" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putStopCondition"></a>

```python
def put_stop_condition(
  value: typing.Union[IResolvable, typing.List[FisExperimentTemplateStopCondition]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putStopCondition.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition">FisExperimentTemplateStopCondition</a>]]

---

##### `put_target` <a name="put_target" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putTarget"></a>

```python
def put_target(
  value: typing.Union[IResolvable, typing.List[FisExperimentTemplateTarget]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putTarget.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget">FisExperimentTemplateTarget</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#create FisExperimentTemplate#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#delete FisExperimentTemplate#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#update FisExperimentTemplate#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetTarget"></a>

```python
def reset_target() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList">FisExperimentTemplateActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.stopCondition">stop_condition</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList">FisExperimentTemplateStopConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList">FisExperimentTemplateTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference">FisExperimentTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.actionInput">action_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction">FisExperimentTemplateAction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.stopConditionInput">stop_condition_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition">FisExperimentTemplateStopCondition</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.targetInput">target_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget">FisExperimentTemplateTarget</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts">FisExperimentTemplateTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.action"></a>

```python
action: FisExperimentTemplateActionList
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList">FisExperimentTemplateActionList</a>

---

##### `stop_condition`<sup>Required</sup> <a name="stop_condition" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.stopCondition"></a>

```python
stop_condition: FisExperimentTemplateStopConditionList
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList">FisExperimentTemplateStopConditionList</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.target"></a>

```python
target: FisExperimentTemplateTargetList
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList">FisExperimentTemplateTargetList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.timeouts"></a>

```python
timeouts: FisExperimentTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference">FisExperimentTemplateTimeoutsOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.actionInput"></a>

```python
action_input: typing.Union[IResolvable, typing.List[FisExperimentTemplateAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction">FisExperimentTemplateAction</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `stop_condition_input`<sup>Optional</sup> <a name="stop_condition_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.stopConditionInput"></a>

```python
stop_condition_input: typing.Union[IResolvable, typing.List[FisExperimentTemplateStopCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition">FisExperimentTemplateStopCondition</a>]]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.targetInput"></a>

```python
target_input: typing.Union[IResolvable, typing.List[FisExperimentTemplateTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget">FisExperimentTemplateTarget</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[FisExperimentTemplateTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts">FisExperimentTemplateTimeouts</a>, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FisExperimentTemplateAction <a name="FisExperimentTemplateAction" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateAction(
  action_id: str,
  name: str,
  description: str = None,
  parameter: typing.Union[IResolvable, typing.List[FisExperimentTemplateActionParameter]] = None,
  start_after: typing.List[str] = None,
  target: FisExperimentTemplateActionTarget = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.actionId">action_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#action_id FisExperimentTemplate#action_id}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#name FisExperimentTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#description FisExperimentTemplate#description}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.parameter">parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter">FisExperimentTemplateActionParameter</a>]]</code> | parameter block. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.startAfter">start_after</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#start_after FisExperimentTemplate#start_after}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget">FisExperimentTemplateActionTarget</a></code> | target block. |

---

##### `action_id`<sup>Required</sup> <a name="action_id" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.actionId"></a>

```python
action_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#action_id FisExperimentTemplate#action_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#name FisExperimentTemplate#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#description FisExperimentTemplate#description}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.parameter"></a>

```python
parameter: typing.Union[IResolvable, typing.List[FisExperimentTemplateActionParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter">FisExperimentTemplateActionParameter</a>]]

parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#parameter FisExperimentTemplate#parameter}

---

##### `start_after`<sup>Optional</sup> <a name="start_after" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.startAfter"></a>

```python
start_after: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#start_after FisExperimentTemplate#start_after}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.target"></a>

```python
target: FisExperimentTemplateActionTarget
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget">FisExperimentTemplateActionTarget</a>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#target FisExperimentTemplate#target}

---

### FisExperimentTemplateActionParameter <a name="FisExperimentTemplateActionParameter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateActionParameter(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#key FisExperimentTemplate#key}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#value FisExperimentTemplate#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#key FisExperimentTemplate#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#value FisExperimentTemplate#value}.

---

### FisExperimentTemplateActionTarget <a name="FisExperimentTemplateActionTarget" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateActionTarget(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#key FisExperimentTemplate#key}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#value FisExperimentTemplate#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#key FisExperimentTemplate#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#value FisExperimentTemplate#value}.

---

### FisExperimentTemplateConfig <a name="FisExperimentTemplateConfig" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: typing.Union[IResolvable, typing.List[FisExperimentTemplateAction]],
  description: str,
  role_arn: str,
  stop_condition: typing.Union[IResolvable, typing.List[FisExperimentTemplateStopCondition]],
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  target: typing.Union[IResolvable, typing.List[FisExperimentTemplateTarget]] = None,
  timeouts: FisExperimentTemplateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.action">action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction">FisExperimentTemplateAction</a>]]</code> | action block. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#description FisExperimentTemplate#description}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#role_arn FisExperimentTemplate#role_arn}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.stopCondition">stop_condition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition">FisExperimentTemplateStopCondition</a>]]</code> | stop_condition block. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#id FisExperimentTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#tags FisExperimentTemplate#tags}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#tags_all FisExperimentTemplate#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.target">target</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget">FisExperimentTemplateTarget</a>]]</code> | target block. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts">FisExperimentTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.action"></a>

```python
action: typing.Union[IResolvable, typing.List[FisExperimentTemplateAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction">FisExperimentTemplateAction</a>]]

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#action FisExperimentTemplate#action}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#description FisExperimentTemplate#description}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#role_arn FisExperimentTemplate#role_arn}.

---

##### `stop_condition`<sup>Required</sup> <a name="stop_condition" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.stopCondition"></a>

```python
stop_condition: typing.Union[IResolvable, typing.List[FisExperimentTemplateStopCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition">FisExperimentTemplateStopCondition</a>]]

stop_condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#stop_condition FisExperimentTemplate#stop_condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#id FisExperimentTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#tags FisExperimentTemplate#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#tags_all FisExperimentTemplate#tags_all}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.target"></a>

```python
target: typing.Union[IResolvable, typing.List[FisExperimentTemplateTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget">FisExperimentTemplateTarget</a>]]

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#target FisExperimentTemplate#target}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.timeouts"></a>

```python
timeouts: FisExperimentTemplateTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts">FisExperimentTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#timeouts FisExperimentTemplate#timeouts}

---

### FisExperimentTemplateStopCondition <a name="FisExperimentTemplateStopCondition" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateStopCondition(
  source: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#source FisExperimentTemplate#source}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#value FisExperimentTemplate#value}. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#source FisExperimentTemplate#source}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#value FisExperimentTemplate#value}.

---

### FisExperimentTemplateTarget <a name="FisExperimentTemplateTarget" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateTarget(
  name: str,
  resource_type: str,
  selection_mode: str,
  filter: typing.Union[IResolvable, typing.List[FisExperimentTemplateTargetFilter]] = None,
  resource_arns: typing.List[str] = None,
  resource_tag: typing.Union[IResolvable, typing.List[FisExperimentTemplateTargetResourceTag]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#name FisExperimentTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#resource_type FisExperimentTemplate#resource_type}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.selectionMode">selection_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#selection_mode FisExperimentTemplate#selection_mode}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter">FisExperimentTemplateTargetFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.resourceArns">resource_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#resource_arns FisExperimentTemplate#resource_arns}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.resourceTag">resource_tag</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag">FisExperimentTemplateTargetResourceTag</a>]]</code> | resource_tag block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#name FisExperimentTemplate#name}.

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#resource_type FisExperimentTemplate#resource_type}.

---

##### `selection_mode`<sup>Required</sup> <a name="selection_mode" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.selectionMode"></a>

```python
selection_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#selection_mode FisExperimentTemplate#selection_mode}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[FisExperimentTemplateTargetFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter">FisExperimentTemplateTargetFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#filter FisExperimentTemplate#filter}

---

##### `resource_arns`<sup>Optional</sup> <a name="resource_arns" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.resourceArns"></a>

```python
resource_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#resource_arns FisExperimentTemplate#resource_arns}.

---

##### `resource_tag`<sup>Optional</sup> <a name="resource_tag" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.resourceTag"></a>

```python
resource_tag: typing.Union[IResolvable, typing.List[FisExperimentTemplateTargetResourceTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag">FisExperimentTemplateTargetResourceTag</a>]]

resource_tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#resource_tag FisExperimentTemplate#resource_tag}

---

### FisExperimentTemplateTargetFilter <a name="FisExperimentTemplateTargetFilter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateTargetFilter(
  path: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#path FisExperimentTemplate#path}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#values FisExperimentTemplate#values}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#path FisExperimentTemplate#path}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#values FisExperimentTemplate#values}.

---

### FisExperimentTemplateTargetResourceTag <a name="FisExperimentTemplateTargetResourceTag" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateTargetResourceTag(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#key FisExperimentTemplate#key}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#value FisExperimentTemplate#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#key FisExperimentTemplate#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#value FisExperimentTemplate#value}.

---

### FisExperimentTemplateTimeouts <a name="FisExperimentTemplateTimeouts" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#create FisExperimentTemplate#create}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#delete FisExperimentTemplate#delete}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#update FisExperimentTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#create FisExperimentTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#delete FisExperimentTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#update FisExperimentTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FisExperimentTemplateActionList <a name="FisExperimentTemplateActionList" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FisExperimentTemplateActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction">FisExperimentTemplateAction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FisExperimentTemplateAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction">FisExperimentTemplateAction</a>]]

---


### FisExperimentTemplateActionOutputReference <a name="FisExperimentTemplateActionOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.putParameter">put_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.putTarget">put_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resetParameter">reset_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resetStartAfter">reset_start_after</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resetTarget">reset_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameter` <a name="put_parameter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.putParameter"></a>

```python
def put_parameter(
  value: typing.Union[IResolvable, typing.List[FisExperimentTemplateActionParameter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.putParameter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter">FisExperimentTemplateActionParameter</a>]]

---

##### `put_target` <a name="put_target" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.putTarget"></a>

```python
def put_target(
  key: str,
  value: str
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.putTarget.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#key FisExperimentTemplate#key}.

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.putTarget.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fis_experiment_template#value FisExperimentTemplate#value}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_parameter` <a name="reset_parameter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resetParameter"></a>

```python
def reset_parameter() -> None
```

##### `reset_start_after` <a name="reset_start_after" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resetStartAfter"></a>

```python
def reset_start_after() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList">FisExperimentTemplateActionParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference">FisExperimentTemplateActionTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.actionIdInput">action_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.parameterInput">parameter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter">FisExperimentTemplateActionParameter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.startAfterInput">start_after_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.targetInput">target_input</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget">FisExperimentTemplateActionTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.actionId">action_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.startAfter">start_after</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction">FisExperimentTemplateAction</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.parameter"></a>

```python
parameter: FisExperimentTemplateActionParameterList
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList">FisExperimentTemplateActionParameterList</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.target"></a>

```python
target: FisExperimentTemplateActionTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference">FisExperimentTemplateActionTargetOutputReference</a>

---

##### `action_id_input`<sup>Optional</sup> <a name="action_id_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.actionIdInput"></a>

```python
action_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameter_input`<sup>Optional</sup> <a name="parameter_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.parameterInput"></a>

```python
parameter_input: typing.Union[IResolvable, typing.List[FisExperimentTemplateActionParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter">FisExperimentTemplateActionParameter</a>]]

---

##### `start_after_input`<sup>Optional</sup> <a name="start_after_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.startAfterInput"></a>

```python
start_after_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.targetInput"></a>

```python
target_input: FisExperimentTemplateActionTarget
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget">FisExperimentTemplateActionTarget</a>

---

##### `action_id`<sup>Required</sup> <a name="action_id" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.actionId"></a>

```python
action_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `start_after`<sup>Required</sup> <a name="start_after" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.startAfter"></a>

```python
start_after: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[FisExperimentTemplateAction, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction">FisExperimentTemplateAction</a>, cdktf.IResolvable]

---


### FisExperimentTemplateActionParameterList <a name="FisExperimentTemplateActionParameterList" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateActionParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FisExperimentTemplateActionParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter">FisExperimentTemplateActionParameter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FisExperimentTemplateActionParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter">FisExperimentTemplateActionParameter</a>]]

---


### FisExperimentTemplateActionParameterOutputReference <a name="FisExperimentTemplateActionParameterOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter">FisExperimentTemplateActionParameter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[FisExperimentTemplateActionParameter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter">FisExperimentTemplateActionParameter</a>, cdktf.IResolvable]

---


### FisExperimentTemplateActionTargetOutputReference <a name="FisExperimentTemplateActionTargetOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget">FisExperimentTemplateActionTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.internalValue"></a>

```python
internal_value: FisExperimentTemplateActionTarget
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget">FisExperimentTemplateActionTarget</a>

---


### FisExperimentTemplateStopConditionList <a name="FisExperimentTemplateStopConditionList" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateStopConditionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FisExperimentTemplateStopConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition">FisExperimentTemplateStopCondition</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FisExperimentTemplateStopCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition">FisExperimentTemplateStopCondition</a>]]

---


### FisExperimentTemplateStopConditionOutputReference <a name="FisExperimentTemplateStopConditionOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition">FisExperimentTemplateStopCondition</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[FisExperimentTemplateStopCondition, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition">FisExperimentTemplateStopCondition</a>, cdktf.IResolvable]

---


### FisExperimentTemplateTargetFilterList <a name="FisExperimentTemplateTargetFilterList" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateTargetFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FisExperimentTemplateTargetFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter">FisExperimentTemplateTargetFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FisExperimentTemplateTargetFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter">FisExperimentTemplateTargetFilter</a>]]

---


### FisExperimentTemplateTargetFilterOutputReference <a name="FisExperimentTemplateTargetFilterOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter">FisExperimentTemplateTargetFilter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[FisExperimentTemplateTargetFilter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter">FisExperimentTemplateTargetFilter</a>, cdktf.IResolvable]

---


### FisExperimentTemplateTargetList <a name="FisExperimentTemplateTargetList" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateTargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FisExperimentTemplateTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget">FisExperimentTemplateTarget</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FisExperimentTemplateTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget">FisExperimentTemplateTarget</a>]]

---


### FisExperimentTemplateTargetOutputReference <a name="FisExperimentTemplateTargetOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.putResourceTag">put_resource_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.resetResourceArns">reset_resource_arns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.resetResourceTag">reset_resource_tag</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[FisExperimentTemplateTargetFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter">FisExperimentTemplateTargetFilter</a>]]

---

##### `put_resource_tag` <a name="put_resource_tag" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.putResourceTag"></a>

```python
def put_resource_tag(
  value: typing.Union[IResolvable, typing.List[FisExperimentTemplateTargetResourceTag]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.putResourceTag.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag">FisExperimentTemplateTargetResourceTag</a>]]

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_resource_arns` <a name="reset_resource_arns" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.resetResourceArns"></a>

```python
def reset_resource_arns() -> None
```

##### `reset_resource_tag` <a name="reset_resource_tag" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.resetResourceTag"></a>

```python
def reset_resource_tag() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList">FisExperimentTemplateTargetFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceTag">resource_tag</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList">FisExperimentTemplateTargetResourceTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter">FisExperimentTemplateTargetFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceArnsInput">resource_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceTagInput">resource_tag_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag">FisExperimentTemplateTargetResourceTag</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.selectionModeInput">selection_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceArns">resource_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.selectionMode">selection_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget">FisExperimentTemplateTarget</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.filter"></a>

```python
filter: FisExperimentTemplateTargetFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList">FisExperimentTemplateTargetFilterList</a>

---

##### `resource_tag`<sup>Required</sup> <a name="resource_tag" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceTag"></a>

```python
resource_tag: FisExperimentTemplateTargetResourceTagList
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList">FisExperimentTemplateTargetResourceTagList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[FisExperimentTemplateTargetFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter">FisExperimentTemplateTargetFilter</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_arns_input`<sup>Optional</sup> <a name="resource_arns_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceArnsInput"></a>

```python
resource_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_tag_input`<sup>Optional</sup> <a name="resource_tag_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceTagInput"></a>

```python
resource_tag_input: typing.Union[IResolvable, typing.List[FisExperimentTemplateTargetResourceTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag">FisExperimentTemplateTargetResourceTag</a>]]

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `selection_mode_input`<sup>Optional</sup> <a name="selection_mode_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.selectionModeInput"></a>

```python
selection_mode_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_arns`<sup>Required</sup> <a name="resource_arns" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceArns"></a>

```python
resource_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `selection_mode`<sup>Required</sup> <a name="selection_mode" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.selectionMode"></a>

```python
selection_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[FisExperimentTemplateTarget, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget">FisExperimentTemplateTarget</a>, cdktf.IResolvable]

---


### FisExperimentTemplateTargetResourceTagList <a name="FisExperimentTemplateTargetResourceTagList" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FisExperimentTemplateTargetResourceTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag">FisExperimentTemplateTargetResourceTag</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FisExperimentTemplateTargetResourceTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag">FisExperimentTemplateTargetResourceTag</a>]]

---


### FisExperimentTemplateTargetResourceTagOutputReference <a name="FisExperimentTemplateTargetResourceTagOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag">FisExperimentTemplateTargetResourceTag</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[FisExperimentTemplateTargetResourceTag, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag">FisExperimentTemplateTargetResourceTag</a>, cdktf.IResolvable]

---


### FisExperimentTemplateTimeoutsOutputReference <a name="FisExperimentTemplateTimeoutsOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fis_experiment_template

fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts">FisExperimentTemplateTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[FisExperimentTemplateTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts">FisExperimentTemplateTimeouts</a>, cdktf.IResolvable]

---



