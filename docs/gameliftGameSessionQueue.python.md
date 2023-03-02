# `gameliftGameSessionQueue` Submodule <a name="`gameliftGameSessionQueue` Submodule" id="@cdktf/provider-aws.gameliftGameSessionQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftGameSessionQueue <a name="GameliftGameSessionQueue" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue aws_gamelift_game_session_queue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_game_session_queue

gameliftGameSessionQueue.GameliftGameSessionQueue(
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
  destinations: typing.List[str] = None,
  id: str = None,
  notification_target: str = None,
  player_latency_policy: typing.Union[IResolvable, typing.List[GameliftGameSessionQueuePlayerLatencyPolicy]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeout_in_seconds: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#name GameliftGameSessionQueue#name}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.destinations">destinations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#destinations GameliftGameSessionQueue#destinations}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#id GameliftGameSessionQueue#id}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.notificationTarget">notification_target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#notification_target GameliftGameSessionQueue#notification_target}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.playerLatencyPolicy">player_latency_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy">GameliftGameSessionQueuePlayerLatencyPolicy</a>]]</code> | player_latency_policy block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#tags GameliftGameSessionQueue#tags}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#tags_all GameliftGameSessionQueue#tags_all}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#timeout_in_seconds GameliftGameSessionQueue#timeout_in_seconds}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#name GameliftGameSessionQueue#name}.

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.destinations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#destinations GameliftGameSessionQueue#destinations}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#id GameliftGameSessionQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notification_target`<sup>Optional</sup> <a name="notification_target" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.notificationTarget"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#notification_target GameliftGameSessionQueue#notification_target}.

---

##### `player_latency_policy`<sup>Optional</sup> <a name="player_latency_policy" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.playerLatencyPolicy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy">GameliftGameSessionQueuePlayerLatencyPolicy</a>]]

player_latency_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#player_latency_policy GameliftGameSessionQueue#player_latency_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#tags GameliftGameSessionQueue#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#tags_all GameliftGameSessionQueue#tags_all}.

---

##### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.timeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#timeout_in_seconds GameliftGameSessionQueue#timeout_in_seconds}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.putPlayerLatencyPolicy">put_player_latency_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetDestinations">reset_destinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetNotificationTarget">reset_notification_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetPlayerLatencyPolicy">reset_player_latency_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTimeoutInSeconds">reset_timeout_in_seconds</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_player_latency_policy` <a name="put_player_latency_policy" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.putPlayerLatencyPolicy"></a>

```python
def put_player_latency_policy(
  value: typing.Union[IResolvable, typing.List[GameliftGameSessionQueuePlayerLatencyPolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.putPlayerLatencyPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy">GameliftGameSessionQueuePlayerLatencyPolicy</a>]]

---

##### `reset_destinations` <a name="reset_destinations" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetDestinations"></a>

```python
def reset_destinations() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_notification_target` <a name="reset_notification_target" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetNotificationTarget"></a>

```python
def reset_notification_target() -> None
```

##### `reset_player_latency_policy` <a name="reset_player_latency_policy" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetPlayerLatencyPolicy"></a>

```python
def reset_player_latency_policy() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeout_in_seconds` <a name="reset_timeout_in_seconds" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTimeoutInSeconds"></a>

```python
def reset_timeout_in_seconds() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_game_session_queue

gameliftGameSessionQueue.GameliftGameSessionQueue.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_game_session_queue

gameliftGameSessionQueue.GameliftGameSessionQueue.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_game_session_queue

gameliftGameSessionQueue.GameliftGameSessionQueue.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.playerLatencyPolicy">player_latency_policy</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList">GameliftGameSessionQueuePlayerLatencyPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.destinationsInput">destinations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.notificationTargetInput">notification_target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.playerLatencyPolicyInput">player_latency_policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy">GameliftGameSessionQueuePlayerLatencyPolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.timeoutInSecondsInput">timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.destinations">destinations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.notificationTarget">notification_target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `player_latency_policy`<sup>Required</sup> <a name="player_latency_policy" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.playerLatencyPolicy"></a>

```python
player_latency_policy: GameliftGameSessionQueuePlayerLatencyPolicyList
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList">GameliftGameSessionQueuePlayerLatencyPolicyList</a>

---

##### `destinations_input`<sup>Optional</sup> <a name="destinations_input" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.destinationsInput"></a>

```python
destinations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notification_target_input`<sup>Optional</sup> <a name="notification_target_input" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.notificationTargetInput"></a>

```python
notification_target_input: str
```

- *Type:* str

---

##### `player_latency_policy_input`<sup>Optional</sup> <a name="player_latency_policy_input" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.playerLatencyPolicyInput"></a>

```python
player_latency_policy_input: typing.Union[IResolvable, typing.List[GameliftGameSessionQueuePlayerLatencyPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy">GameliftGameSessionQueuePlayerLatencyPolicy</a>]]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeout_in_seconds_input`<sup>Optional</sup> <a name="timeout_in_seconds_input" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.timeoutInSecondsInput"></a>

```python
timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.destinations"></a>

```python
destinations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notification_target`<sup>Required</sup> <a name="notification_target" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.notificationTarget"></a>

```python
notification_target: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftGameSessionQueueConfig <a name="GameliftGameSessionQueueConfig" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_game_session_queue

gameliftGameSessionQueue.GameliftGameSessionQueueConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  destinations: typing.List[str] = None,
  id: str = None,
  notification_target: str = None,
  player_latency_policy: typing.Union[IResolvable, typing.List[GameliftGameSessionQueuePlayerLatencyPolicy]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeout_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#name GameliftGameSessionQueue#name}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.destinations">destinations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#destinations GameliftGameSessionQueue#destinations}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#id GameliftGameSessionQueue#id}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.notificationTarget">notification_target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#notification_target GameliftGameSessionQueue#notification_target}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.playerLatencyPolicy">player_latency_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy">GameliftGameSessionQueuePlayerLatencyPolicy</a>]]</code> | player_latency_policy block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#tags GameliftGameSessionQueue#tags}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#tags_all GameliftGameSessionQueue#tags_all}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#timeout_in_seconds GameliftGameSessionQueue#timeout_in_seconds}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#name GameliftGameSessionQueue#name}.

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.destinations"></a>

```python
destinations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#destinations GameliftGameSessionQueue#destinations}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#id GameliftGameSessionQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notification_target`<sup>Optional</sup> <a name="notification_target" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.notificationTarget"></a>

```python
notification_target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#notification_target GameliftGameSessionQueue#notification_target}.

---

##### `player_latency_policy`<sup>Optional</sup> <a name="player_latency_policy" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.playerLatencyPolicy"></a>

```python
player_latency_policy: typing.Union[IResolvable, typing.List[GameliftGameSessionQueuePlayerLatencyPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy">GameliftGameSessionQueuePlayerLatencyPolicy</a>]]

player_latency_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#player_latency_policy GameliftGameSessionQueue#player_latency_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#tags GameliftGameSessionQueue#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#tags_all GameliftGameSessionQueue#tags_all}.

---

##### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#timeout_in_seconds GameliftGameSessionQueue#timeout_in_seconds}.

---

### GameliftGameSessionQueuePlayerLatencyPolicy <a name="GameliftGameSessionQueuePlayerLatencyPolicy" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_game_session_queue

gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy(
  maximum_individual_player_latency_milliseconds: typing.Union[int, float],
  policy_duration_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy.property.maximumIndividualPlayerLatencyMilliseconds">maximum_individual_player_latency_milliseconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#maximum_individual_player_latency_milliseconds GameliftGameSessionQueue#maximum_individual_player_latency_milliseconds}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy.property.policyDurationSeconds">policy_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#policy_duration_seconds GameliftGameSessionQueue#policy_duration_seconds}. |

---

##### `maximum_individual_player_latency_milliseconds`<sup>Required</sup> <a name="maximum_individual_player_latency_milliseconds" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy.property.maximumIndividualPlayerLatencyMilliseconds"></a>

```python
maximum_individual_player_latency_milliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#maximum_individual_player_latency_milliseconds GameliftGameSessionQueue#maximum_individual_player_latency_milliseconds}.

---

##### `policy_duration_seconds`<sup>Optional</sup> <a name="policy_duration_seconds" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy.property.policyDurationSeconds"></a>

```python
policy_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#policy_duration_seconds GameliftGameSessionQueue#policy_duration_seconds}.

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftGameSessionQueuePlayerLatencyPolicyList <a name="GameliftGameSessionQueuePlayerLatencyPolicyList" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_game_session_queue

gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GameliftGameSessionQueuePlayerLatencyPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy">GameliftGameSessionQueuePlayerLatencyPolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GameliftGameSessionQueuePlayerLatencyPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy">GameliftGameSessionQueuePlayerLatencyPolicy</a>]]

---


### GameliftGameSessionQueuePlayerLatencyPolicyOutputReference <a name="GameliftGameSessionQueuePlayerLatencyPolicyOutputReference" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_game_session_queue

gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.resetPolicyDurationSeconds">reset_policy_duration_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_policy_duration_seconds` <a name="reset_policy_duration_seconds" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.resetPolicyDurationSeconds"></a>

```python
def reset_policy_duration_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.maximumIndividualPlayerLatencyMillisecondsInput">maximum_individual_player_latency_milliseconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.policyDurationSecondsInput">policy_duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.maximumIndividualPlayerLatencyMilliseconds">maximum_individual_player_latency_milliseconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.policyDurationSeconds">policy_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy">GameliftGameSessionQueuePlayerLatencyPolicy</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_individual_player_latency_milliseconds_input`<sup>Optional</sup> <a name="maximum_individual_player_latency_milliseconds_input" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.maximumIndividualPlayerLatencyMillisecondsInput"></a>

```python
maximum_individual_player_latency_milliseconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_duration_seconds_input`<sup>Optional</sup> <a name="policy_duration_seconds_input" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.policyDurationSecondsInput"></a>

```python
policy_duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_individual_player_latency_milliseconds`<sup>Required</sup> <a name="maximum_individual_player_latency_milliseconds" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.maximumIndividualPlayerLatencyMilliseconds"></a>

```python
maximum_individual_player_latency_milliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_duration_seconds`<sup>Required</sup> <a name="policy_duration_seconds" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.policyDurationSeconds"></a>

```python
policy_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GameliftGameSessionQueuePlayerLatencyPolicy, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy">GameliftGameSessionQueuePlayerLatencyPolicy</a>, cdktf.IResolvable]

---



