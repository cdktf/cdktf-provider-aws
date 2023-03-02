# `appautoscalingScheduledAction` Submodule <a name="`appautoscalingScheduledAction` Submodule" id="@cdktf/provider-aws.appautoscalingScheduledAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppautoscalingScheduledAction <a name="AppautoscalingScheduledAction" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action aws_appautoscaling_scheduled_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_scheduled_action

appautoscalingScheduledAction.AppautoscalingScheduledAction(
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
  resource_id: str,
  scalable_dimension: str,
  scalable_target_action: AppautoscalingScheduledActionScalableTargetAction,
  schedule: str,
  service_namespace: str,
  end_time: str = None,
  id: str = None,
  start_time: str = None,
  timezone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#name AppautoscalingScheduledAction#name}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#resource_id AppautoscalingScheduledAction#resource_id}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.scalableDimension">scalable_dimension</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#scalable_dimension AppautoscalingScheduledAction#scalable_dimension}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.scalableTargetAction">scalable_target_action</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction">AppautoscalingScheduledActionScalableTargetAction</a></code> | scalable_target_action block. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.schedule">schedule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#schedule AppautoscalingScheduledAction#schedule}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.serviceNamespace">service_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#service_namespace AppautoscalingScheduledAction#service_namespace}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.endTime">end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#end_time AppautoscalingScheduledAction#end_time}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#id AppautoscalingScheduledAction#id}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#start_time AppautoscalingScheduledAction#start_time}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#timezone AppautoscalingScheduledAction#timezone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#name AppautoscalingScheduledAction#name}.

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.resourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#resource_id AppautoscalingScheduledAction#resource_id}.

---

##### `scalable_dimension`<sup>Required</sup> <a name="scalable_dimension" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.scalableDimension"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#scalable_dimension AppautoscalingScheduledAction#scalable_dimension}.

---

##### `scalable_target_action`<sup>Required</sup> <a name="scalable_target_action" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.scalableTargetAction"></a>

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction">AppautoscalingScheduledActionScalableTargetAction</a>

scalable_target_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#scalable_target_action AppautoscalingScheduledAction#scalable_target_action}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.schedule"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#schedule AppautoscalingScheduledAction#schedule}.

---

##### `service_namespace`<sup>Required</sup> <a name="service_namespace" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.serviceNamespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#service_namespace AppautoscalingScheduledAction#service_namespace}.

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.endTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#end_time AppautoscalingScheduledAction#end_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#id AppautoscalingScheduledAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.startTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#start_time AppautoscalingScheduledAction#start_time}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.timezone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#timezone AppautoscalingScheduledAction#timezone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.putScalableTargetAction">put_scalable_target_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetStartTime">reset_start_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetTimezone">reset_timezone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_scalable_target_action` <a name="put_scalable_target_action" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.putScalableTargetAction"></a>

```python
def put_scalable_target_action(
  max_capacity: str = None,
  min_capacity: str = None
) -> None
```

###### `max_capacity`<sup>Optional</sup> <a name="max_capacity" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.putScalableTargetAction.parameter.maxCapacity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#max_capacity AppautoscalingScheduledAction#max_capacity}.

---

###### `min_capacity`<sup>Optional</sup> <a name="min_capacity" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.putScalableTargetAction.parameter.minCapacity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#min_capacity AppautoscalingScheduledAction#min_capacity}.

---

##### `reset_end_time` <a name="reset_end_time" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetStartTime"></a>

```python
def reset_start_time() -> None
```

##### `reset_timezone` <a name="reset_timezone" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetTimezone"></a>

```python
def reset_timezone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_scheduled_action

appautoscalingScheduledAction.AppautoscalingScheduledAction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_scheduled_action

appautoscalingScheduledAction.AppautoscalingScheduledAction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_scheduled_action

appautoscalingScheduledAction.AppautoscalingScheduledAction.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scalableTargetAction">scalable_target_action</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference">AppautoscalingScheduledActionScalableTargetActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scalableDimensionInput">scalable_dimension_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scalableTargetActionInput">scalable_target_action_input</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction">AppautoscalingScheduledActionScalableTargetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scheduleInput">schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.serviceNamespaceInput">service_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scalableDimension">scalable_dimension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.serviceNamespace">service_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `scalable_target_action`<sup>Required</sup> <a name="scalable_target_action" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scalableTargetAction"></a>

```python
scalable_target_action: AppautoscalingScheduledActionScalableTargetActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference">AppautoscalingScheduledActionScalableTargetActionOutputReference</a>

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `scalable_dimension_input`<sup>Optional</sup> <a name="scalable_dimension_input" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scalableDimensionInput"></a>

```python
scalable_dimension_input: str
```

- *Type:* str

---

##### `scalable_target_action_input`<sup>Optional</sup> <a name="scalable_target_action_input" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scalableTargetActionInput"></a>

```python
scalable_target_action_input: AppautoscalingScheduledActionScalableTargetAction
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction">AppautoscalingScheduledActionScalableTargetAction</a>

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scheduleInput"></a>

```python
schedule_input: str
```

- *Type:* str

---

##### `service_namespace_input`<sup>Optional</sup> <a name="service_namespace_input" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.serviceNamespaceInput"></a>

```python
service_namespace_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `scalable_dimension`<sup>Required</sup> <a name="scalable_dimension" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scalableDimension"></a>

```python
scalable_dimension: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `service_namespace`<sup>Required</sup> <a name="service_namespace" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.serviceNamespace"></a>

```python
service_namespace: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppautoscalingScheduledActionConfig <a name="AppautoscalingScheduledActionConfig" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_scheduled_action

appautoscalingScheduledAction.AppautoscalingScheduledActionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_id: str,
  scalable_dimension: str,
  scalable_target_action: AppautoscalingScheduledActionScalableTargetAction,
  schedule: str,
  service_namespace: str,
  end_time: str = None,
  id: str = None,
  start_time: str = None,
  timezone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#name AppautoscalingScheduledAction#name}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#resource_id AppautoscalingScheduledAction#resource_id}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.scalableDimension">scalable_dimension</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#scalable_dimension AppautoscalingScheduledAction#scalable_dimension}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.scalableTargetAction">scalable_target_action</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction">AppautoscalingScheduledActionScalableTargetAction</a></code> | scalable_target_action block. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.schedule">schedule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#schedule AppautoscalingScheduledAction#schedule}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.serviceNamespace">service_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#service_namespace AppautoscalingScheduledAction#service_namespace}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.endTime">end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#end_time AppautoscalingScheduledAction#end_time}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#id AppautoscalingScheduledAction#id}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#start_time AppautoscalingScheduledAction#start_time}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#timezone AppautoscalingScheduledAction#timezone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#name AppautoscalingScheduledAction#name}.

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#resource_id AppautoscalingScheduledAction#resource_id}.

---

##### `scalable_dimension`<sup>Required</sup> <a name="scalable_dimension" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.scalableDimension"></a>

```python
scalable_dimension: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#scalable_dimension AppautoscalingScheduledAction#scalable_dimension}.

---

##### `scalable_target_action`<sup>Required</sup> <a name="scalable_target_action" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.scalableTargetAction"></a>

```python
scalable_target_action: AppautoscalingScheduledActionScalableTargetAction
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction">AppautoscalingScheduledActionScalableTargetAction</a>

scalable_target_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#scalable_target_action AppautoscalingScheduledAction#scalable_target_action}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#schedule AppautoscalingScheduledAction#schedule}.

---

##### `service_namespace`<sup>Required</sup> <a name="service_namespace" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.serviceNamespace"></a>

```python
service_namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#service_namespace AppautoscalingScheduledAction#service_namespace}.

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#end_time AppautoscalingScheduledAction#end_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#id AppautoscalingScheduledAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#start_time AppautoscalingScheduledAction#start_time}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#timezone AppautoscalingScheduledAction#timezone}.

---

### AppautoscalingScheduledActionScalableTargetAction <a name="AppautoscalingScheduledActionScalableTargetAction" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_scheduled_action

appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction(
  max_capacity: str = None,
  min_capacity: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction.property.maxCapacity">max_capacity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#max_capacity AppautoscalingScheduledAction#max_capacity}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction.property.minCapacity">min_capacity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#min_capacity AppautoscalingScheduledAction#min_capacity}. |

---

##### `max_capacity`<sup>Optional</sup> <a name="max_capacity" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction.property.maxCapacity"></a>

```python
max_capacity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#max_capacity AppautoscalingScheduledAction#max_capacity}.

---

##### `min_capacity`<sup>Optional</sup> <a name="min_capacity" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction.property.minCapacity"></a>

```python
min_capacity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#min_capacity AppautoscalingScheduledAction#min_capacity}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppautoscalingScheduledActionScalableTargetActionOutputReference <a name="AppautoscalingScheduledActionScalableTargetActionOutputReference" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_scheduled_action

appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.resetMaxCapacity">reset_max_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.resetMinCapacity">reset_min_capacity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_capacity` <a name="reset_max_capacity" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.resetMaxCapacity"></a>

```python
def reset_max_capacity() -> None
```

##### `reset_min_capacity` <a name="reset_min_capacity" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.resetMinCapacity"></a>

```python
def reset_min_capacity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.maxCapacityInput">max_capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.minCapacityInput">min_capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.maxCapacity">max_capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.minCapacity">min_capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction">AppautoscalingScheduledActionScalableTargetAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_capacity_input`<sup>Optional</sup> <a name="max_capacity_input" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.maxCapacityInput"></a>

```python
max_capacity_input: str
```

- *Type:* str

---

##### `min_capacity_input`<sup>Optional</sup> <a name="min_capacity_input" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.minCapacityInput"></a>

```python
min_capacity_input: str
```

- *Type:* str

---

##### `max_capacity`<sup>Required</sup> <a name="max_capacity" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.maxCapacity"></a>

```python
max_capacity: str
```

- *Type:* str

---

##### `min_capacity`<sup>Required</sup> <a name="min_capacity" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.minCapacity"></a>

```python
min_capacity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.internalValue"></a>

```python
internal_value: AppautoscalingScheduledActionScalableTargetAction
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction">AppautoscalingScheduledActionScalableTargetAction</a>

---



