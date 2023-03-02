# `autoscalingLifecycleHook` Submodule <a name="`autoscalingLifecycleHook` Submodule" id="@cdktf/provider-aws.autoscalingLifecycleHook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingLifecycleHook <a name="AutoscalingLifecycleHook" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook aws_autoscaling_lifecycle_hook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import autoscaling_lifecycle_hook

autoscalingLifecycleHook.AutoscalingLifecycleHook(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autoscaling_group_name: str,
  lifecycle_transition: str,
  name: str,
  default_result: str = None,
  heartbeat_timeout: typing.Union[int, float] = None,
  id: str = None,
  notification_metadata: str = None,
  notification_target_arn: str = None,
  role_arn: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.autoscalingGroupName">autoscaling_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#autoscaling_group_name AutoscalingLifecycleHook#autoscaling_group_name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.lifecycleTransition">lifecycle_transition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#lifecycle_transition AutoscalingLifecycleHook#lifecycle_transition}. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#name AutoscalingLifecycleHook#name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.defaultResult">default_result</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#default_result AutoscalingLifecycleHook#default_result}. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.heartbeatTimeout">heartbeat_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#heartbeat_timeout AutoscalingLifecycleHook#heartbeat_timeout}. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#id AutoscalingLifecycleHook#id}. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.notificationMetadata">notification_metadata</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#notification_metadata AutoscalingLifecycleHook#notification_metadata}. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.notificationTargetArn">notification_target_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#notification_target_arn AutoscalingLifecycleHook#notification_target_arn}. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#role_arn AutoscalingLifecycleHook#role_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoscaling_group_name`<sup>Required</sup> <a name="autoscaling_group_name" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.autoscalingGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#autoscaling_group_name AutoscalingLifecycleHook#autoscaling_group_name}.

---

##### `lifecycle_transition`<sup>Required</sup> <a name="lifecycle_transition" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.lifecycleTransition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#lifecycle_transition AutoscalingLifecycleHook#lifecycle_transition}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#name AutoscalingLifecycleHook#name}.

---

##### `default_result`<sup>Optional</sup> <a name="default_result" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.defaultResult"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#default_result AutoscalingLifecycleHook#default_result}.

---

##### `heartbeat_timeout`<sup>Optional</sup> <a name="heartbeat_timeout" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.heartbeatTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#heartbeat_timeout AutoscalingLifecycleHook#heartbeat_timeout}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#id AutoscalingLifecycleHook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notification_metadata`<sup>Optional</sup> <a name="notification_metadata" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.notificationMetadata"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#notification_metadata AutoscalingLifecycleHook#notification_metadata}.

---

##### `notification_target_arn`<sup>Optional</sup> <a name="notification_target_arn" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.notificationTargetArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#notification_target_arn AutoscalingLifecycleHook#notification_target_arn}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#role_arn AutoscalingLifecycleHook#role_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetDefaultResult">reset_default_result</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetHeartbeatTimeout">reset_heartbeat_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetNotificationMetadata">reset_notification_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetNotificationTargetArn">reset_notification_target_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_default_result` <a name="reset_default_result" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetDefaultResult"></a>

```python
def reset_default_result() -> None
```

##### `reset_heartbeat_timeout` <a name="reset_heartbeat_timeout" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetHeartbeatTimeout"></a>

```python
def reset_heartbeat_timeout() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_notification_metadata` <a name="reset_notification_metadata" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetNotificationMetadata"></a>

```python
def reset_notification_metadata() -> None
```

##### `reset_notification_target_arn` <a name="reset_notification_target_arn" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetNotificationTargetArn"></a>

```python
def reset_notification_target_arn() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import autoscaling_lifecycle_hook

autoscalingLifecycleHook.AutoscalingLifecycleHook.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import autoscaling_lifecycle_hook

autoscalingLifecycleHook.AutoscalingLifecycleHook.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import autoscaling_lifecycle_hook

autoscalingLifecycleHook.AutoscalingLifecycleHook.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.autoscalingGroupNameInput">autoscaling_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.defaultResultInput">default_result_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.heartbeatTimeoutInput">heartbeat_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleTransitionInput">lifecycle_transition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationMetadataInput">notification_metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationTargetArnInput">notification_target_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.autoscalingGroupName">autoscaling_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.defaultResult">default_result</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.heartbeatTimeout">heartbeat_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleTransition">lifecycle_transition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationMetadata">notification_metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationTargetArn">notification_target_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoscaling_group_name_input`<sup>Optional</sup> <a name="autoscaling_group_name_input" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.autoscalingGroupNameInput"></a>

```python
autoscaling_group_name_input: str
```

- *Type:* str

---

##### `default_result_input`<sup>Optional</sup> <a name="default_result_input" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.defaultResultInput"></a>

```python
default_result_input: str
```

- *Type:* str

---

##### `heartbeat_timeout_input`<sup>Optional</sup> <a name="heartbeat_timeout_input" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.heartbeatTimeoutInput"></a>

```python
heartbeat_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lifecycle_transition_input`<sup>Optional</sup> <a name="lifecycle_transition_input" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleTransitionInput"></a>

```python
lifecycle_transition_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notification_metadata_input`<sup>Optional</sup> <a name="notification_metadata_input" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationMetadataInput"></a>

```python
notification_metadata_input: str
```

- *Type:* str

---

##### `notification_target_arn_input`<sup>Optional</sup> <a name="notification_target_arn_input" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationTargetArnInput"></a>

```python
notification_target_arn_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `autoscaling_group_name`<sup>Required</sup> <a name="autoscaling_group_name" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.autoscalingGroupName"></a>

```python
autoscaling_group_name: str
```

- *Type:* str

---

##### `default_result`<sup>Required</sup> <a name="default_result" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.defaultResult"></a>

```python
default_result: str
```

- *Type:* str

---

##### `heartbeat_timeout`<sup>Required</sup> <a name="heartbeat_timeout" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.heartbeatTimeout"></a>

```python
heartbeat_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_transition`<sup>Required</sup> <a name="lifecycle_transition" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleTransition"></a>

```python
lifecycle_transition: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notification_metadata`<sup>Required</sup> <a name="notification_metadata" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationMetadata"></a>

```python
notification_metadata: str
```

- *Type:* str

---

##### `notification_target_arn`<sup>Required</sup> <a name="notification_target_arn" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationTargetArn"></a>

```python
notification_target_arn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingLifecycleHookConfig <a name="AutoscalingLifecycleHookConfig" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import autoscaling_lifecycle_hook

autoscalingLifecycleHook.AutoscalingLifecycleHookConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autoscaling_group_name: str,
  lifecycle_transition: str,
  name: str,
  default_result: str = None,
  heartbeat_timeout: typing.Union[int, float] = None,
  id: str = None,
  notification_metadata: str = None,
  notification_target_arn: str = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.autoscalingGroupName">autoscaling_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#autoscaling_group_name AutoscalingLifecycleHook#autoscaling_group_name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.lifecycleTransition">lifecycle_transition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#lifecycle_transition AutoscalingLifecycleHook#lifecycle_transition}. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#name AutoscalingLifecycleHook#name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.defaultResult">default_result</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#default_result AutoscalingLifecycleHook#default_result}. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.heartbeatTimeout">heartbeat_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#heartbeat_timeout AutoscalingLifecycleHook#heartbeat_timeout}. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#id AutoscalingLifecycleHook#id}. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.notificationMetadata">notification_metadata</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#notification_metadata AutoscalingLifecycleHook#notification_metadata}. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.notificationTargetArn">notification_target_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#notification_target_arn AutoscalingLifecycleHook#notification_target_arn}. |
| <code><a href="#@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#role_arn AutoscalingLifecycleHook#role_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoscaling_group_name`<sup>Required</sup> <a name="autoscaling_group_name" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.autoscalingGroupName"></a>

```python
autoscaling_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#autoscaling_group_name AutoscalingLifecycleHook#autoscaling_group_name}.

---

##### `lifecycle_transition`<sup>Required</sup> <a name="lifecycle_transition" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.lifecycleTransition"></a>

```python
lifecycle_transition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#lifecycle_transition AutoscalingLifecycleHook#lifecycle_transition}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#name AutoscalingLifecycleHook#name}.

---

##### `default_result`<sup>Optional</sup> <a name="default_result" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.defaultResult"></a>

```python
default_result: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#default_result AutoscalingLifecycleHook#default_result}.

---

##### `heartbeat_timeout`<sup>Optional</sup> <a name="heartbeat_timeout" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.heartbeatTimeout"></a>

```python
heartbeat_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#heartbeat_timeout AutoscalingLifecycleHook#heartbeat_timeout}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#id AutoscalingLifecycleHook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notification_metadata`<sup>Optional</sup> <a name="notification_metadata" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.notificationMetadata"></a>

```python
notification_metadata: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#notification_metadata AutoscalingLifecycleHook#notification_metadata}.

---

##### `notification_target_arn`<sup>Optional</sup> <a name="notification_target_arn" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.notificationTargetArn"></a>

```python
notification_target_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#notification_target_arn AutoscalingLifecycleHook#notification_target_arn}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-aws.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook#role_arn AutoscalingLifecycleHook#role_arn}.

---



