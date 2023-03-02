# `sagemakerHumanTaskUi` Submodule <a name="`sagemakerHumanTaskUi` Submodule" id="@cdktf/provider-aws.sagemakerHumanTaskUi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerHumanTaskUi <a name="SagemakerHumanTaskUi" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui aws_sagemaker_human_task_ui}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_human_task_ui

sagemakerHumanTaskUi.SagemakerHumanTaskUi(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  human_task_ui_name: str,
  ui_template: SagemakerHumanTaskUiUiTemplate,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.humanTaskUiName">human_task_ui_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#human_task_ui_name SagemakerHumanTaskUi#human_task_ui_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.uiTemplate">ui_template</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate">SagemakerHumanTaskUiUiTemplate</a></code> | ui_template block. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#id SagemakerHumanTaskUi#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#tags SagemakerHumanTaskUi#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#tags_all SagemakerHumanTaskUi#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `human_task_ui_name`<sup>Required</sup> <a name="human_task_ui_name" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.humanTaskUiName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#human_task_ui_name SagemakerHumanTaskUi#human_task_ui_name}.

---

##### `ui_template`<sup>Required</sup> <a name="ui_template" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.uiTemplate"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate">SagemakerHumanTaskUiUiTemplate</a>

ui_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#ui_template SagemakerHumanTaskUi#ui_template}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#id SagemakerHumanTaskUi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#tags SagemakerHumanTaskUi#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#tags_all SagemakerHumanTaskUi#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.putUiTemplate">put_ui_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_ui_template` <a name="put_ui_template" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.putUiTemplate"></a>

```python
def put_ui_template(
  content: str = None
) -> None
```

###### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.putUiTemplate.parameter.content"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#content SagemakerHumanTaskUi#content}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_human_task_ui

sagemakerHumanTaskUi.SagemakerHumanTaskUi.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_human_task_ui

sagemakerHumanTaskUi.SagemakerHumanTaskUi.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_human_task_ui

sagemakerHumanTaskUi.SagemakerHumanTaskUi.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.uiTemplate">ui_template</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference">SagemakerHumanTaskUiUiTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.humanTaskUiNameInput">human_task_ui_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.uiTemplateInput">ui_template_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate">SagemakerHumanTaskUiUiTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.humanTaskUiName">human_task_ui_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `ui_template`<sup>Required</sup> <a name="ui_template" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.uiTemplate"></a>

```python
ui_template: SagemakerHumanTaskUiUiTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference">SagemakerHumanTaskUiUiTemplateOutputReference</a>

---

##### `human_task_ui_name_input`<sup>Optional</sup> <a name="human_task_ui_name_input" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.humanTaskUiNameInput"></a>

```python
human_task_ui_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ui_template_input`<sup>Optional</sup> <a name="ui_template_input" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.uiTemplateInput"></a>

```python
ui_template_input: SagemakerHumanTaskUiUiTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate">SagemakerHumanTaskUiUiTemplate</a>

---

##### `human_task_ui_name`<sup>Required</sup> <a name="human_task_ui_name" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.humanTaskUiName"></a>

```python
human_task_ui_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerHumanTaskUiConfig <a name="SagemakerHumanTaskUiConfig" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_human_task_ui

sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  human_task_ui_name: str,
  ui_template: SagemakerHumanTaskUiUiTemplate,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.humanTaskUiName">human_task_ui_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#human_task_ui_name SagemakerHumanTaskUi#human_task_ui_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.uiTemplate">ui_template</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate">SagemakerHumanTaskUiUiTemplate</a></code> | ui_template block. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#id SagemakerHumanTaskUi#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#tags SagemakerHumanTaskUi#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#tags_all SagemakerHumanTaskUi#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `human_task_ui_name`<sup>Required</sup> <a name="human_task_ui_name" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.humanTaskUiName"></a>

```python
human_task_ui_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#human_task_ui_name SagemakerHumanTaskUi#human_task_ui_name}.

---

##### `ui_template`<sup>Required</sup> <a name="ui_template" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.uiTemplate"></a>

```python
ui_template: SagemakerHumanTaskUiUiTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate">SagemakerHumanTaskUiUiTemplate</a>

ui_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#ui_template SagemakerHumanTaskUi#ui_template}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#id SagemakerHumanTaskUi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#tags SagemakerHumanTaskUi#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#tags_all SagemakerHumanTaskUi#tags_all}.

---

### SagemakerHumanTaskUiUiTemplate <a name="SagemakerHumanTaskUiUiTemplate" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_human_task_ui

sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate(
  content: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#content SagemakerHumanTaskUi#content}. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#content SagemakerHumanTaskUi#content}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerHumanTaskUiUiTemplateOutputReference <a name="SagemakerHumanTaskUiUiTemplateOutputReference" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_human_task_ui

sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.resetContent">reset_content</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content` <a name="reset_content" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.resetContent"></a>

```python
def reset_content() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.contentSha256">content_sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate">SagemakerHumanTaskUiUiTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_sha256`<sup>Required</sup> <a name="content_sha256" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.contentSha256"></a>

```python
content_sha256: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerHumanTaskUiUiTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate">SagemakerHumanTaskUiUiTemplate</a>

---



