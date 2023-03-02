# `evidentlyLaunch` Submodule <a name="`evidentlyLaunch` Submodule" id="@cdktf/provider-aws.evidentlyLaunch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EvidentlyLaunch <a name="EvidentlyLaunch" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch aws_evidently_launch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_launch

evidentlyLaunch.EvidentlyLaunch(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  groups: typing.Union[IResolvable, typing.List[EvidentlyLaunchGroups]],
  name: str,
  project: str,
  description: str = None,
  id: str = None,
  metric_monitors: typing.Union[IResolvable, typing.List[EvidentlyLaunchMetricMonitors]] = None,
  randomization_salt: str = None,
  scheduled_splits_config: EvidentlyLaunchScheduledSplitsConfig = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: EvidentlyLaunchTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.groups">groups</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>]]</code> | groups block. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#project EvidentlyLaunch#project}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#description EvidentlyLaunch#description}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#id EvidentlyLaunch#id}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.metricMonitors">metric_monitors</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>]]</code> | metric_monitors block. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.randomizationSalt">randomization_salt</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#randomization_salt EvidentlyLaunch#randomization_salt}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.scheduledSplitsConfig">scheduled_splits_config</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a></code> | scheduled_splits_config block. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#tags EvidentlyLaunch#tags}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#tags_all EvidentlyLaunch#tags_all}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts">EvidentlyLaunchTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.groups"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>]]

groups block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#groups EvidentlyLaunch#groups}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}.

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#project EvidentlyLaunch#project}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#description EvidentlyLaunch#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#id EvidentlyLaunch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metric_monitors`<sup>Optional</sup> <a name="metric_monitors" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.metricMonitors"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>]]

metric_monitors block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#metric_monitors EvidentlyLaunch#metric_monitors}

---

##### `randomization_salt`<sup>Optional</sup> <a name="randomization_salt" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.randomizationSalt"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#randomization_salt EvidentlyLaunch#randomization_salt}.

---

##### `scheduled_splits_config`<sup>Optional</sup> <a name="scheduled_splits_config" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.scheduledSplitsConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>

scheduled_splits_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#scheduled_splits_config EvidentlyLaunch#scheduled_splits_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#tags EvidentlyLaunch#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#tags_all EvidentlyLaunch#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts">EvidentlyLaunchTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#timeouts EvidentlyLaunch#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putGroups">put_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putMetricMonitors">put_metric_monitors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putScheduledSplitsConfig">put_scheduled_splits_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetMetricMonitors">reset_metric_monitors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetRandomizationSalt">reset_randomization_salt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetScheduledSplitsConfig">reset_scheduled_splits_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_groups` <a name="put_groups" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putGroups"></a>

```python
def put_groups(
  value: typing.Union[IResolvable, typing.List[EvidentlyLaunchGroups]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putGroups.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>]]

---

##### `put_metric_monitors` <a name="put_metric_monitors" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putMetricMonitors"></a>

```python
def put_metric_monitors(
  value: typing.Union[IResolvable, typing.List[EvidentlyLaunchMetricMonitors]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putMetricMonitors.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>]]

---

##### `put_scheduled_splits_config` <a name="put_scheduled_splits_config" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putScheduledSplitsConfig"></a>

```python
def put_scheduled_splits_config(
  steps: typing.Union[IResolvable, typing.List[EvidentlyLaunchScheduledSplitsConfigSteps]]
) -> None
```

###### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putScheduledSplitsConfig.parameter.steps"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps">EvidentlyLaunchScheduledSplitsConfigSteps</a>]]

steps block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#steps EvidentlyLaunch#steps}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#create EvidentlyLaunch#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#delete EvidentlyLaunch#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#update EvidentlyLaunch#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metric_monitors` <a name="reset_metric_monitors" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetMetricMonitors"></a>

```python
def reset_metric_monitors() -> None
```

##### `reset_randomization_salt` <a name="reset_randomization_salt" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetRandomizationSalt"></a>

```python
def reset_randomization_salt() -> None
```

##### `reset_scheduled_splits_config` <a name="reset_scheduled_splits_config" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetScheduledSplitsConfig"></a>

```python
def reset_scheduled_splits_config() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import evidently_launch

evidentlyLaunch.EvidentlyLaunch.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import evidently_launch

evidentlyLaunch.EvidentlyLaunch.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import evidently_launch

evidentlyLaunch.EvidentlyLaunch.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.execution">execution</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList">EvidentlyLaunchExecutionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.groups">groups</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList">EvidentlyLaunchGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.metricMonitors">metric_monitors</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList">EvidentlyLaunchMetricMonitorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.scheduledSplitsConfig">scheduled_splits_config</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference">EvidentlyLaunchScheduledSplitsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.statusReason">status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference">EvidentlyLaunchTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.groupsInput">groups_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.metricMonitorsInput">metric_monitors_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.randomizationSaltInput">randomization_salt_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.scheduledSplitsConfigInput">scheduled_splits_config_input</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts">EvidentlyLaunchTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.randomizationSalt">randomization_salt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `execution`<sup>Required</sup> <a name="execution" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.execution"></a>

```python
execution: EvidentlyLaunchExecutionList
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList">EvidentlyLaunchExecutionList</a>

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.groups"></a>

```python
groups: EvidentlyLaunchGroupsList
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList">EvidentlyLaunchGroupsList</a>

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `metric_monitors`<sup>Required</sup> <a name="metric_monitors" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.metricMonitors"></a>

```python
metric_monitors: EvidentlyLaunchMetricMonitorsList
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList">EvidentlyLaunchMetricMonitorsList</a>

---

##### `scheduled_splits_config`<sup>Required</sup> <a name="scheduled_splits_config" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.scheduledSplitsConfig"></a>

```python
scheduled_splits_config: EvidentlyLaunchScheduledSplitsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference">EvidentlyLaunchScheduledSplitsConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_reason`<sup>Required</sup> <a name="status_reason" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.statusReason"></a>

```python
status_reason: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.timeouts"></a>

```python
timeouts: EvidentlyLaunchTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference">EvidentlyLaunchTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `groups_input`<sup>Optional</sup> <a name="groups_input" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.groupsInput"></a>

```python
groups_input: typing.Union[IResolvable, typing.List[EvidentlyLaunchGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metric_monitors_input`<sup>Optional</sup> <a name="metric_monitors_input" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.metricMonitorsInput"></a>

```python
metric_monitors_input: typing.Union[IResolvable, typing.List[EvidentlyLaunchMetricMonitors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `randomization_salt_input`<sup>Optional</sup> <a name="randomization_salt_input" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.randomizationSaltInput"></a>

```python
randomization_salt_input: str
```

- *Type:* str

---

##### `scheduled_splits_config_input`<sup>Optional</sup> <a name="scheduled_splits_config_input" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.scheduledSplitsConfigInput"></a>

```python
scheduled_splits_config_input: EvidentlyLaunchScheduledSplitsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[EvidentlyLaunchTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts">EvidentlyLaunchTimeouts</a>, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `randomization_salt`<sup>Required</sup> <a name="randomization_salt" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.randomizationSalt"></a>

```python
randomization_salt: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EvidentlyLaunchConfig <a name="EvidentlyLaunchConfig" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_launch

evidentlyLaunch.EvidentlyLaunchConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  groups: typing.Union[IResolvable, typing.List[EvidentlyLaunchGroups]],
  name: str,
  project: str,
  description: str = None,
  id: str = None,
  metric_monitors: typing.Union[IResolvable, typing.List[EvidentlyLaunchMetricMonitors]] = None,
  randomization_salt: str = None,
  scheduled_splits_config: EvidentlyLaunchScheduledSplitsConfig = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: EvidentlyLaunchTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.groups">groups</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>]]</code> | groups block. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#project EvidentlyLaunch#project}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#description EvidentlyLaunch#description}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#id EvidentlyLaunch#id}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.metricMonitors">metric_monitors</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>]]</code> | metric_monitors block. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.randomizationSalt">randomization_salt</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#randomization_salt EvidentlyLaunch#randomization_salt}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.scheduledSplitsConfig">scheduled_splits_config</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a></code> | scheduled_splits_config block. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#tags EvidentlyLaunch#tags}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#tags_all EvidentlyLaunch#tags_all}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts">EvidentlyLaunchTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.groups"></a>

```python
groups: typing.Union[IResolvable, typing.List[EvidentlyLaunchGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>]]

groups block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#groups EvidentlyLaunch#groups}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}.

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#project EvidentlyLaunch#project}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#description EvidentlyLaunch#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#id EvidentlyLaunch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metric_monitors`<sup>Optional</sup> <a name="metric_monitors" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.metricMonitors"></a>

```python
metric_monitors: typing.Union[IResolvable, typing.List[EvidentlyLaunchMetricMonitors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>]]

metric_monitors block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#metric_monitors EvidentlyLaunch#metric_monitors}

---

##### `randomization_salt`<sup>Optional</sup> <a name="randomization_salt" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.randomizationSalt"></a>

```python
randomization_salt: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#randomization_salt EvidentlyLaunch#randomization_salt}.

---

##### `scheduled_splits_config`<sup>Optional</sup> <a name="scheduled_splits_config" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.scheduledSplitsConfig"></a>

```python
scheduled_splits_config: EvidentlyLaunchScheduledSplitsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>

scheduled_splits_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#scheduled_splits_config EvidentlyLaunch#scheduled_splits_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#tags EvidentlyLaunch#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#tags_all EvidentlyLaunch#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.timeouts"></a>

```python
timeouts: EvidentlyLaunchTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts">EvidentlyLaunchTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#timeouts EvidentlyLaunch#timeouts}

---

### EvidentlyLaunchExecution <a name="EvidentlyLaunchExecution" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecution.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_launch

evidentlyLaunch.EvidentlyLaunchExecution()
```


### EvidentlyLaunchGroups <a name="EvidentlyLaunchGroups" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_launch

evidentlyLaunch.EvidentlyLaunchGroups(
  feature: str,
  name: str,
  variation: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.feature">feature</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#feature EvidentlyLaunch#feature}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.variation">variation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#variation EvidentlyLaunch#variation}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#description EvidentlyLaunch#description}. |

---

##### `feature`<sup>Required</sup> <a name="feature" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.feature"></a>

```python
feature: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#feature EvidentlyLaunch#feature}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}.

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.variation"></a>

```python
variation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#variation EvidentlyLaunch#variation}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#description EvidentlyLaunch#description}.

---

### EvidentlyLaunchMetricMonitors <a name="EvidentlyLaunchMetricMonitors" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_launch

evidentlyLaunch.EvidentlyLaunchMetricMonitors(
  metric_definition: EvidentlyLaunchMetricMonitorsMetricDefinition
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.metricDefinition">metric_definition</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a></code> | metric_definition block. |

---

##### `metric_definition`<sup>Required</sup> <a name="metric_definition" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.metricDefinition"></a>

```python
metric_definition: EvidentlyLaunchMetricMonitorsMetricDefinition
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a>

metric_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#metric_definition EvidentlyLaunch#metric_definition}

---

### EvidentlyLaunchMetricMonitorsMetricDefinition <a name="EvidentlyLaunchMetricMonitorsMetricDefinition" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_launch

evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition(
  entity_id_key: str,
  name: str,
  value_key: str,
  event_pattern: str = None,
  unit_label: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.entityIdKey">entity_id_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#entity_id_key EvidentlyLaunch#entity_id_key}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.valueKey">value_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#value_key EvidentlyLaunch#value_key}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.eventPattern">event_pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#event_pattern EvidentlyLaunch#event_pattern}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.unitLabel">unit_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#unit_label EvidentlyLaunch#unit_label}. |

---

##### `entity_id_key`<sup>Required</sup> <a name="entity_id_key" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.entityIdKey"></a>

```python
entity_id_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#entity_id_key EvidentlyLaunch#entity_id_key}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}.

---

##### `value_key`<sup>Required</sup> <a name="value_key" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.valueKey"></a>

```python
value_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#value_key EvidentlyLaunch#value_key}.

---

##### `event_pattern`<sup>Optional</sup> <a name="event_pattern" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.eventPattern"></a>

```python
event_pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#event_pattern EvidentlyLaunch#event_pattern}.

---

##### `unit_label`<sup>Optional</sup> <a name="unit_label" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.unitLabel"></a>

```python
unit_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#unit_label EvidentlyLaunch#unit_label}.

---

### EvidentlyLaunchScheduledSplitsConfig <a name="EvidentlyLaunchScheduledSplitsConfig" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_launch

evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig(
  steps: typing.Union[IResolvable, typing.List[EvidentlyLaunchScheduledSplitsConfigSteps]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.property.steps">steps</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps">EvidentlyLaunchScheduledSplitsConfigSteps</a>]]</code> | steps block. |

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.property.steps"></a>

```python
steps: typing.Union[IResolvable, typing.List[EvidentlyLaunchScheduledSplitsConfigSteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps">EvidentlyLaunchScheduledSplitsConfigSteps</a>]]

steps block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#steps EvidentlyLaunch#steps}

---

### EvidentlyLaunchScheduledSplitsConfigSteps <a name="EvidentlyLaunchScheduledSplitsConfigSteps" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_launch

evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps(
  group_weights: typing.Mapping[typing.Union[int, float]],
  start_time: str,
  segment_overrides: typing.Union[IResolvable, typing.List[EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.property.groupWeights">group_weights</a></code> | <code>typing.Mapping[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#group_weights EvidentlyLaunch#group_weights}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.property.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#start_time EvidentlyLaunch#start_time}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.property.segmentOverrides">segment_overrides</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides</a>]]</code> | segment_overrides block. |

---

##### `group_weights`<sup>Required</sup> <a name="group_weights" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.property.groupWeights"></a>

```python
group_weights: typing.Mapping[typing.Union[int, float]]
```

- *Type:* typing.Mapping[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#group_weights EvidentlyLaunch#group_weights}.

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#start_time EvidentlyLaunch#start_time}.

---

##### `segment_overrides`<sup>Optional</sup> <a name="segment_overrides" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.property.segmentOverrides"></a>

```python
segment_overrides: typing.Union[IResolvable, typing.List[EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides</a>]]

segment_overrides block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#segment_overrides EvidentlyLaunch#segment_overrides}

---

### EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides <a name="EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_launch

evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides(
  evaluation_order: typing.Union[int, float],
  segment: str,
  weights: typing.Mapping[typing.Union[int, float]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.property.evaluationOrder">evaluation_order</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#evaluation_order EvidentlyLaunch#evaluation_order}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.property.segment">segment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#segment EvidentlyLaunch#segment}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.property.weights">weights</a></code> | <code>typing.Mapping[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#weights EvidentlyLaunch#weights}. |

---

##### `evaluation_order`<sup>Required</sup> <a name="evaluation_order" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.property.evaluationOrder"></a>

```python
evaluation_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#evaluation_order EvidentlyLaunch#evaluation_order}.

---

##### `segment`<sup>Required</sup> <a name="segment" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.property.segment"></a>

```python
segment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#segment EvidentlyLaunch#segment}.

---

##### `weights`<sup>Required</sup> <a name="weights" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.property.weights"></a>

```python
weights: typing.Mapping[typing.Union[int, float]]
```

- *Type:* typing.Mapping[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#weights EvidentlyLaunch#weights}.

---

### EvidentlyLaunchTimeouts <a name="EvidentlyLaunchTimeouts" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_launch

evidentlyLaunch.EvidentlyLaunchTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#create EvidentlyLaunch#create}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#delete EvidentlyLaunch#delete}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#update EvidentlyLaunch#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#create EvidentlyLaunch#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#delete EvidentlyLaunch#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#update EvidentlyLaunch#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EvidentlyLaunchExecutionList <a name="EvidentlyLaunchExecutionList" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_launch

evidentlyLaunch.EvidentlyLaunchExecutionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EvidentlyLaunchExecutionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### EvidentlyLaunchExecutionOutputReference <a name="EvidentlyLaunchExecutionOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_launch

evidentlyLaunch.EvidentlyLaunchExecutionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.endedTime">ended_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.startedTime">started_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecution">EvidentlyLaunchExecution</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ended_time`<sup>Required</sup> <a name="ended_time" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.endedTime"></a>

```python
ended_time: str
```

- *Type:* str

---

##### `started_time`<sup>Required</sup> <a name="started_time" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.startedTime"></a>

```python
started_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.internalValue"></a>

```python
internal_value: EvidentlyLaunchExecution
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecution">EvidentlyLaunchExecution</a>

---


### EvidentlyLaunchGroupsList <a name="EvidentlyLaunchGroupsList" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_launch

evidentlyLaunch.EvidentlyLaunchGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EvidentlyLaunchGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EvidentlyLaunchGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>]]

---


### EvidentlyLaunchGroupsOutputReference <a name="EvidentlyLaunchGroupsOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_launch

evidentlyLaunch.EvidentlyLaunchGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.featureInput">feature_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.variationInput">variation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.feature">feature</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.variation">variation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `feature_input`<sup>Optional</sup> <a name="feature_input" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.featureInput"></a>

```python
feature_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `variation_input`<sup>Optional</sup> <a name="variation_input" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.variationInput"></a>

```python
variation_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `feature`<sup>Required</sup> <a name="feature" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.feature"></a>

```python
feature: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.variation"></a>

```python
variation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EvidentlyLaunchGroups, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>, cdktf.IResolvable]

---


### EvidentlyLaunchMetricMonitorsList <a name="EvidentlyLaunchMetricMonitorsList" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_launch

evidentlyLaunch.EvidentlyLaunchMetricMonitorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EvidentlyLaunchMetricMonitorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EvidentlyLaunchMetricMonitors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>]]

---


### EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference <a name="EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_launch

evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resetEventPattern">reset_event_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resetUnitLabel">reset_unit_label</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_event_pattern` <a name="reset_event_pattern" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resetEventPattern"></a>

```python
def reset_event_pattern() -> None
```

##### `reset_unit_label` <a name="reset_unit_label" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resetUnitLabel"></a>

```python
def reset_unit_label() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.entityIdKeyInput">entity_id_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.eventPatternInput">event_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.unitLabelInput">unit_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.valueKeyInput">value_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.entityIdKey">entity_id_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.eventPattern">event_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.unitLabel">unit_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.valueKey">value_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_id_key_input`<sup>Optional</sup> <a name="entity_id_key_input" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.entityIdKeyInput"></a>

```python
entity_id_key_input: str
```

- *Type:* str

---

##### `event_pattern_input`<sup>Optional</sup> <a name="event_pattern_input" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.eventPatternInput"></a>

```python
event_pattern_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `unit_label_input`<sup>Optional</sup> <a name="unit_label_input" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.unitLabelInput"></a>

```python
unit_label_input: str
```

- *Type:* str

---

##### `value_key_input`<sup>Optional</sup> <a name="value_key_input" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.valueKeyInput"></a>

```python
value_key_input: str
```

- *Type:* str

---

##### `entity_id_key`<sup>Required</sup> <a name="entity_id_key" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.entityIdKey"></a>

```python
entity_id_key: str
```

- *Type:* str

---

##### `event_pattern`<sup>Required</sup> <a name="event_pattern" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.eventPattern"></a>

```python
event_pattern: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `unit_label`<sup>Required</sup> <a name="unit_label" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.unitLabel"></a>

```python
unit_label: str
```

- *Type:* str

---

##### `value_key`<sup>Required</sup> <a name="value_key" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.valueKey"></a>

```python
value_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: EvidentlyLaunchMetricMonitorsMetricDefinition
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a>

---


### EvidentlyLaunchMetricMonitorsOutputReference <a name="EvidentlyLaunchMetricMonitorsOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_launch

evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.putMetricDefinition">put_metric_definition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metric_definition` <a name="put_metric_definition" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.putMetricDefinition"></a>

```python
def put_metric_definition(
  entity_id_key: str,
  name: str,
  value_key: str,
  event_pattern: str = None,
  unit_label: str = None
) -> None
```

###### `entity_id_key`<sup>Required</sup> <a name="entity_id_key" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.putMetricDefinition.parameter.entityIdKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#entity_id_key EvidentlyLaunch#entity_id_key}.

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.putMetricDefinition.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}.

---

###### `value_key`<sup>Required</sup> <a name="value_key" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.putMetricDefinition.parameter.valueKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#value_key EvidentlyLaunch#value_key}.

---

###### `event_pattern`<sup>Optional</sup> <a name="event_pattern" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.putMetricDefinition.parameter.eventPattern"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#event_pattern EvidentlyLaunch#event_pattern}.

---

###### `unit_label`<sup>Optional</sup> <a name="unit_label" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.putMetricDefinition.parameter.unitLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#unit_label EvidentlyLaunch#unit_label}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.metricDefinition">metric_definition</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference">EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.metricDefinitionInput">metric_definition_input</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_definition`<sup>Required</sup> <a name="metric_definition" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.metricDefinition"></a>

```python
metric_definition: EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference">EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference</a>

---

##### `metric_definition_input`<sup>Optional</sup> <a name="metric_definition_input" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.metricDefinitionInput"></a>

```python
metric_definition_input: EvidentlyLaunchMetricMonitorsMetricDefinition
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EvidentlyLaunchMetricMonitors, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>, cdktf.IResolvable]

---


### EvidentlyLaunchScheduledSplitsConfigOutputReference <a name="EvidentlyLaunchScheduledSplitsConfigOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_launch

evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putSteps">put_steps</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_steps` <a name="put_steps" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putSteps"></a>

```python
def put_steps(
  value: typing.Union[IResolvable, typing.List[EvidentlyLaunchScheduledSplitsConfigSteps]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putSteps.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps">EvidentlyLaunchScheduledSplitsConfigSteps</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.steps">steps</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList">EvidentlyLaunchScheduledSplitsConfigStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.stepsInput">steps_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps">EvidentlyLaunchScheduledSplitsConfigSteps</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.steps"></a>

```python
steps: EvidentlyLaunchScheduledSplitsConfigStepsList
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList">EvidentlyLaunchScheduledSplitsConfigStepsList</a>

---

##### `steps_input`<sup>Optional</sup> <a name="steps_input" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.stepsInput"></a>

```python
steps_input: typing.Union[IResolvable, typing.List[EvidentlyLaunchScheduledSplitsConfigSteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps">EvidentlyLaunchScheduledSplitsConfigSteps</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.internalValue"></a>

```python
internal_value: EvidentlyLaunchScheduledSplitsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>

---


### EvidentlyLaunchScheduledSplitsConfigStepsList <a name="EvidentlyLaunchScheduledSplitsConfigStepsList" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_launch

evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EvidentlyLaunchScheduledSplitsConfigStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps">EvidentlyLaunchScheduledSplitsConfigSteps</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EvidentlyLaunchScheduledSplitsConfigSteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps">EvidentlyLaunchScheduledSplitsConfigSteps</a>]]

---


### EvidentlyLaunchScheduledSplitsConfigStepsOutputReference <a name="EvidentlyLaunchScheduledSplitsConfigStepsOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_launch

evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.putSegmentOverrides">put_segment_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.resetSegmentOverrides">reset_segment_overrides</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_segment_overrides` <a name="put_segment_overrides" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.putSegmentOverrides"></a>

```python
def put_segment_overrides(
  value: typing.Union[IResolvable, typing.List[EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.putSegmentOverrides.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides</a>]]

---

##### `reset_segment_overrides` <a name="reset_segment_overrides" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.resetSegmentOverrides"></a>

```python
def reset_segment_overrides() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.segmentOverrides">segment_overrides</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.groupWeightsInput">group_weights_input</a></code> | <code>typing.Mapping[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.segmentOverridesInput">segment_overrides_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.groupWeights">group_weights</a></code> | <code>typing.Mapping[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps">EvidentlyLaunchScheduledSplitsConfigSteps</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `segment_overrides`<sup>Required</sup> <a name="segment_overrides" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.segmentOverrides"></a>

```python
segment_overrides: EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList</a>

---

##### `group_weights_input`<sup>Optional</sup> <a name="group_weights_input" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.groupWeightsInput"></a>

```python
group_weights_input: typing.Mapping[typing.Union[int, float]]
```

- *Type:* typing.Mapping[typing.Union[int, float]]

---

##### `segment_overrides_input`<sup>Optional</sup> <a name="segment_overrides_input" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.segmentOverridesInput"></a>

```python
segment_overrides_input: typing.Union[IResolvable, typing.List[EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides</a>]]

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `group_weights`<sup>Required</sup> <a name="group_weights" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.groupWeights"></a>

```python
group_weights: typing.Mapping[typing.Union[int, float]]
```

- *Type:* typing.Mapping[typing.Union[int, float]]

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EvidentlyLaunchScheduledSplitsConfigSteps, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps">EvidentlyLaunchScheduledSplitsConfigSteps</a>, cdktf.IResolvable]

---


### EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList <a name="EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_launch

evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides</a>]]

---


### EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference <a name="EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_launch

evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.evaluationOrderInput">evaluation_order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.segmentInput">segment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.weightsInput">weights_input</a></code> | <code>typing.Mapping[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.evaluationOrder">evaluation_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.segment">segment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.weights">weights</a></code> | <code>typing.Mapping[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluation_order_input`<sup>Optional</sup> <a name="evaluation_order_input" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.evaluationOrderInput"></a>

```python
evaluation_order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segment_input`<sup>Optional</sup> <a name="segment_input" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.segmentInput"></a>

```python
segment_input: str
```

- *Type:* str

---

##### `weights_input`<sup>Optional</sup> <a name="weights_input" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.weightsInput"></a>

```python
weights_input: typing.Mapping[typing.Union[int, float]]
```

- *Type:* typing.Mapping[typing.Union[int, float]]

---

##### `evaluation_order`<sup>Required</sup> <a name="evaluation_order" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.evaluationOrder"></a>

```python
evaluation_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segment`<sup>Required</sup> <a name="segment" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.segment"></a>

```python
segment: str
```

- *Type:* str

---

##### `weights`<sup>Required</sup> <a name="weights" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.weights"></a>

```python
weights: typing.Mapping[typing.Union[int, float]]
```

- *Type:* typing.Mapping[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides</a>, cdktf.IResolvable]

---


### EvidentlyLaunchTimeoutsOutputReference <a name="EvidentlyLaunchTimeoutsOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_launch

evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts">EvidentlyLaunchTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EvidentlyLaunchTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts">EvidentlyLaunchTimeouts</a>, cdktf.IResolvable]

---



