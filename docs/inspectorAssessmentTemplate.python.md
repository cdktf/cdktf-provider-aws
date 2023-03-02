# `inspectorAssessmentTemplate` Submodule <a name="`inspectorAssessmentTemplate` Submodule" id="@cdktf/provider-aws.inspectorAssessmentTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InspectorAssessmentTemplate <a name="InspectorAssessmentTemplate" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template aws_inspector_assessment_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import inspector_assessment_template

inspectorAssessmentTemplate.InspectorAssessmentTemplate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  duration: typing.Union[int, float],
  name: str,
  rules_package_arns: typing.List[str],
  target_arn: str,
  event_subscription: typing.Union[IResolvable, typing.List[InspectorAssessmentTemplateEventSubscription]] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.duration">duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#duration InspectorAssessmentTemplate#duration}. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#name InspectorAssessmentTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.rulesPackageArns">rules_package_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#rules_package_arns InspectorAssessmentTemplate#rules_package_arns}. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.targetArn">target_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#target_arn InspectorAssessmentTemplate#target_arn}. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.eventSubscription">event_subscription</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription">InspectorAssessmentTemplateEventSubscription</a>]]</code> | event_subscription block. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#id InspectorAssessmentTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#tags InspectorAssessmentTemplate#tags}. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#tags_all InspectorAssessmentTemplate#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.duration"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#duration InspectorAssessmentTemplate#duration}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#name InspectorAssessmentTemplate#name}.

---

##### `rules_package_arns`<sup>Required</sup> <a name="rules_package_arns" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.rulesPackageArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#rules_package_arns InspectorAssessmentTemplate#rules_package_arns}.

---

##### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.targetArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#target_arn InspectorAssessmentTemplate#target_arn}.

---

##### `event_subscription`<sup>Optional</sup> <a name="event_subscription" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.eventSubscription"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription">InspectorAssessmentTemplateEventSubscription</a>]]

event_subscription block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#event_subscription InspectorAssessmentTemplate#event_subscription}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#id InspectorAssessmentTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#tags InspectorAssessmentTemplate#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#tags_all InspectorAssessmentTemplate#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.putEventSubscription">put_event_subscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetEventSubscription">reset_event_subscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_event_subscription` <a name="put_event_subscription" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.putEventSubscription"></a>

```python
def put_event_subscription(
  value: typing.Union[IResolvable, typing.List[InspectorAssessmentTemplateEventSubscription]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.putEventSubscription.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription">InspectorAssessmentTemplateEventSubscription</a>]]

---

##### `reset_event_subscription` <a name="reset_event_subscription" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetEventSubscription"></a>

```python
def reset_event_subscription() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import inspector_assessment_template

inspectorAssessmentTemplate.InspectorAssessmentTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import inspector_assessment_template

inspectorAssessmentTemplate.InspectorAssessmentTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import inspector_assessment_template

inspectorAssessmentTemplate.InspectorAssessmentTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.eventSubscription">event_subscription</a></code> | <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList">InspectorAssessmentTemplateEventSubscriptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.durationInput">duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.eventSubscriptionInput">event_subscription_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription">InspectorAssessmentTemplateEventSubscription</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.rulesPackageArnsInput">rules_package_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.targetArnInput">target_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.rulesPackageArns">rules_package_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.targetArn">target_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `event_subscription`<sup>Required</sup> <a name="event_subscription" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.eventSubscription"></a>

```python
event_subscription: InspectorAssessmentTemplateEventSubscriptionList
```

- *Type:* <a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList">InspectorAssessmentTemplateEventSubscriptionList</a>

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.durationInput"></a>

```python
duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `event_subscription_input`<sup>Optional</sup> <a name="event_subscription_input" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.eventSubscriptionInput"></a>

```python
event_subscription_input: typing.Union[IResolvable, typing.List[InspectorAssessmentTemplateEventSubscription]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription">InspectorAssessmentTemplateEventSubscription</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rules_package_arns_input`<sup>Optional</sup> <a name="rules_package_arns_input" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.rulesPackageArnsInput"></a>

```python
rules_package_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_arn_input`<sup>Optional</sup> <a name="target_arn_input" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.targetArnInput"></a>

```python
target_arn_input: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rules_package_arns`<sup>Required</sup> <a name="rules_package_arns" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.rulesPackageArns"></a>

```python
rules_package_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.targetArn"></a>

```python
target_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### InspectorAssessmentTemplateConfig <a name="InspectorAssessmentTemplateConfig" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import inspector_assessment_template

inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  duration: typing.Union[int, float],
  name: str,
  rules_package_arns: typing.List[str],
  target_arn: str,
  event_subscription: typing.Union[IResolvable, typing.List[InspectorAssessmentTemplateEventSubscription]] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#duration InspectorAssessmentTemplate#duration}. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#name InspectorAssessmentTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.rulesPackageArns">rules_package_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#rules_package_arns InspectorAssessmentTemplate#rules_package_arns}. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.targetArn">target_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#target_arn InspectorAssessmentTemplate#target_arn}. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.eventSubscription">event_subscription</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription">InspectorAssessmentTemplateEventSubscription</a>]]</code> | event_subscription block. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#id InspectorAssessmentTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#tags InspectorAssessmentTemplate#tags}. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#tags_all InspectorAssessmentTemplate#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#duration InspectorAssessmentTemplate#duration}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#name InspectorAssessmentTemplate#name}.

---

##### `rules_package_arns`<sup>Required</sup> <a name="rules_package_arns" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.rulesPackageArns"></a>

```python
rules_package_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#rules_package_arns InspectorAssessmentTemplate#rules_package_arns}.

---

##### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.targetArn"></a>

```python
target_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#target_arn InspectorAssessmentTemplate#target_arn}.

---

##### `event_subscription`<sup>Optional</sup> <a name="event_subscription" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.eventSubscription"></a>

```python
event_subscription: typing.Union[IResolvable, typing.List[InspectorAssessmentTemplateEventSubscription]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription">InspectorAssessmentTemplateEventSubscription</a>]]

event_subscription block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#event_subscription InspectorAssessmentTemplate#event_subscription}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#id InspectorAssessmentTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#tags InspectorAssessmentTemplate#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#tags_all InspectorAssessmentTemplate#tags_all}.

---

### InspectorAssessmentTemplateEventSubscription <a name="InspectorAssessmentTemplateEventSubscription" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import inspector_assessment_template

inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription(
  event: str,
  topic_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription.property.event">event</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#event InspectorAssessmentTemplate#event}. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription.property.topicArn">topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#topic_arn InspectorAssessmentTemplate#topic_arn}. |

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription.property.event"></a>

```python
event: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#event InspectorAssessmentTemplate#event}.

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#topic_arn InspectorAssessmentTemplate#topic_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### InspectorAssessmentTemplateEventSubscriptionList <a name="InspectorAssessmentTemplateEventSubscriptionList" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import inspector_assessment_template

inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> InspectorAssessmentTemplateEventSubscriptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription">InspectorAssessmentTemplateEventSubscription</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[InspectorAssessmentTemplateEventSubscription]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription">InspectorAssessmentTemplateEventSubscription</a>]]

---


### InspectorAssessmentTemplateEventSubscriptionOutputReference <a name="InspectorAssessmentTemplateEventSubscriptionOutputReference" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import inspector_assessment_template

inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.eventInput">event_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.topicArnInput">topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.event">event</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.topicArn">topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription">InspectorAssessmentTemplateEventSubscription</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_input`<sup>Optional</sup> <a name="event_input" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.eventInput"></a>

```python
event_input: str
```

- *Type:* str

---

##### `topic_arn_input`<sup>Optional</sup> <a name="topic_arn_input" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.topicArnInput"></a>

```python
topic_arn_input: str
```

- *Type:* str

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.event"></a>

```python
event: str
```

- *Type:* str

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[InspectorAssessmentTemplateEventSubscription, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription">InspectorAssessmentTemplateEventSubscription</a>, cdktf.IResolvable]

---



